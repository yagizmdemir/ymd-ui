import React, {
  useState,
  createContext,
  ReactNode,
  useRef,
  useEffect,
} from 'react';
import { ClickOutside } from '../click-outside';

interface AutocompleteContextType {
  inputValue: string;
  showAllSuggestions: boolean;
  setShowAllSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
  selectedChild: string | null;
  setSelectedChild: React.Dispatch<React.SetStateAction<string | null>>;
}

interface AutocompleteProps {
  label: string;
  children: ReactNode[] | null | undefined;
  className?: string;
  onChange: (e: any) => void;
}

const AutocompleteContext =
  createContext<AutocompleteContextType | undefined>(undefined);

const Autocomplete = ({
  label,
  children,
  className = '',
  onChange,
}: AutocompleteProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<ReactNode[]>(
    []
  );
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [showAllSuggestions, setShowAllSuggestions] = useState<boolean>(false);
  const [selectedChild, setSelectedChild] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedChild !== null) {
      onChange({
        target: {
          value: selectedChild,
        },
      });
    }
  }, [selectedChild, onChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    const filteredSuggestions = React.Children.toArray(children).filter(
      (child: ReactNode) =>
        (child as React.ReactElement).props.children
          .toLowerCase()
          .indexOf(inputValue.toLowerCase()) > -1
    );
    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(true);
    setShowAllSuggestions(false);
  };

  const handleItemClick = (child: ReactNode) => {
    setInputValue((child as React.ReactElement).props.children as string);
    setShowSuggestions(false);
    setShowAllSuggestions(false);
    setSelectedChild((child as React.ReactElement).props.value);
  };

  const handleInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.select();
      setShowAllSuggestions(true);
    }
  };

  const handleInputBlur = () => {
    if (!selectedChild && inputRef.current) {
      setInputValue(inputRef.current.value);
    } else if (selectedChild && inputRef.current) {
      setInputValue(selectedChild);
    }
  };

  return (
    <AutocompleteContext.Provider
      value={{
        inputValue,
        showAllSuggestions,
        setShowAllSuggestions,
        selectedChild,
        setSelectedChild,
      }}
    >
      <div className={`ymd-autocomplete-container ${className}`}>
        <input
          placeholder={label}
          className="ymd-form-control"
          type="text"
          value={inputValue}
          onChange={handleChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
        />
        {selectedChild && (
          <div className="ymd-autocomplete-clear">
            <button
              onClick={() => {
                setSelectedChild(null);
                setInputValue('');
                setShowAllSuggestions(true);
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        )}
        <div
          className={`ymd-autocomplete-chevron ${
            showSuggestions || showAllSuggestions ? 'expanded' : ''
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        {showSuggestions && (
          <ClickOutside
            className="ymd-autocomplete-suggestions"
            onClickOutside={(e: any) => {
              if (e.target !== inputRef.current) {
                setShowSuggestions(false);
              }
            }}
          >
            <ul>
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map(
                  (suggestion: ReactNode, index: number) => (
                    <li
                      key={index}
                      onClick={() => handleItemClick(suggestion)}
                      className={
                        selectedChild ===
                        (suggestion as React.ReactElement).props.value
                          ? 'selected'
                          : ''
                      }
                    >
                      {(suggestion as React.ReactElement).props.children}
                      {selectedChild ===
                      (suggestion as React.ReactElement).props.value ? (
                        <div className="ymd-autocomplete-checkmark">
                          <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      ) : null}
                    </li>
                  )
                )
              ) : (
                <li>No result found</li>
              )}
            </ul>
          </ClickOutside>
        )}
        {showAllSuggestions && (
          <ClickOutside
            className="ymd-autocomplete-suggestions"
            onClickOutside={(e: any) => {
              if (e.target !== inputRef.current) {
                setShowAllSuggestions(false);
              }
            }}
          >
            <ul>
              {React.Children.map(
                children,
                (child: ReactNode, index: number) => (
                  <li
                    key={index}
                    onClick={() => handleItemClick(child)}
                    className={
                      selectedChild ===
                      (child as React.ReactElement).props.value
                        ? 'selected'
                        : ''
                    }
                  >
                    {(child as React.ReactElement).props.children}
                    {selectedChild ===
                    (child as React.ReactElement).props.value ? (
                      <div className="ymd-autocomplete-checkmark">
                        <svg
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    ) : null}
                  </li>
                )
              )}
            </ul>
          </ClickOutside>
        )}
      </div>
    </AutocompleteContext.Provider>
  );
};

// @ts-ignore
const AutocompleteItem = ({ children, value}: { children: ReactNode; value: string; }) => {
  return <>{children}</>;
};

export { Autocomplete, AutocompleteItem };
