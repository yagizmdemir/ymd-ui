import React from 'react'

type Props = {}

const DynamicForm = (props: Props) => {
    return (
        <div>DynamicForm</div>
    )
}

export default DynamicForm


// // ControlledForm.js
// import { useFormik } from 'formik';
// import React from 'react';
// import * as Yup from 'yup';
// import { CustomInput, CustomSelect, CustomRadio, CustomCheckbox } from './fields';
// import Button from '../button';
// import Grid from '../grid/grid';
// import GridItem from '../grid/grid-item';
// import CustomPassword from './fields/password';
// import CustomColor from './fields/color';

// const DynamicForm = ({
//     action,
//     method = 'POST',
//     enctype = 'application/json',
//     schema,
//     handleSubmit,
//     inputs,
//     state,
//     buttonText
// }) => {
//     const formik = useFormik({
//         initialValues: state,
//         validationSchema: Yup.object(schema),
//         onSubmit: async (values, { setSubmitting }) => {
//             try {
//                 if (handleSubmit) {
//                     handleSubmit();
//                 }

//                 const response = await fetch(action, {
//                     method,
//                     headers: {
//                         'Content-Type': enctype,
//                     },
//                     body: JSON.stringify(values),
//                 });

//                 const responseData = await response.json();

//                 if (handleSubmit) {
//                     handleSubmit(responseData);
//                 }
//             } catch (error) {
//                 console.error('Hata:', error);
//             } finally {
//                 setSubmitting(false);
//             }
//         },
//     });

//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <Grid>
//                 {inputs.map((input, index) => {
//                     const commonProps = {
//                         field: {
//                             name: input.name,
//                             label: input.label,
//                             onChange: formik.handleChange,
//                             value: formik.values[input.name],
//                             placeholder: input.placeholder || '',
//                             helperText: input.helperText
//                         },
//                         form: formik,
//                         type: input.type
//                     };

//                     switch (input.type) {
//                         case 'select':
//                             return <GridItem key={commonProps.field.name + '_' + index} col={(12 / 100) * (input.width || 50)}> <CustomSelect {...commonProps} option={[]} /> </GridItem>;
//                         case 'radio':
//                             return <GridItem key={commonProps.field.name + '_' + index} col={(12 / 100) * (input.width || 50)}> <CustomRadio {...commonProps} /> </GridItem>
//                         case 'checkbox':
//                             return <GridItem key={commonProps.field.name + '_' + index} col={(12 / 100) * (input.width || 50)}> <CustomCheckbox {...commonProps} /> </GridItem>
//                         case 'password':
//                             return <GridItem key={commonProps.field.name + '_' + index} col={(12 / 100) * (input.width || 50)}> <CustomPassword {...commonProps} /> </GridItem>
//                         case 'color':
//                             return <GridItem key={commonProps.field.name + '_' + index} col={(12 / 100) * (input.width || 50)}> <CustomColor {...commonProps} /> </GridItem>
//                         case 'seperator':
//                             return <GridItem key={'seperator' + '_' + index} col={12}> <hr /> </GridItem>
//                         case 'new_line':
//                             return <GridItem key={'new_line' + '_' + index} col={12} />
//                         default:
//                             return <GridItem key={commonProps.field.name + '_' + index} col={(12 / 100) * (input.width || 50)}> <CustomInput {...commonProps} /></GridItem>;
//                     }
//                 })}
//                 <GridItem col={12}>
//                     <Button variant='filled' color='green' type='submit'>{buttonText}</Button>
//                 </GridItem>
//             </Grid>
//         </form>
//     );
// };

// export default DynamicForm;
