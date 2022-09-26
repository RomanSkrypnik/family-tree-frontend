import * as yup from 'yup';

export const updateSchema = yup.object().shape({
    name: yup.string().required(),
    birth: yup.date().required(),
});

export const createSchema = yup.object().shape({
    name: yup.string().required(),
    birth: yup.date().required(),
    parentId: yup.number().notRequired(),
});
