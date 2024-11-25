import { Request , Response} from "express";
import * as yup from "yup";

interface ICidade{
    name: string;
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
    name: yup.string().required().min(3),
});

export const create = async (req: Request<{},{}, ICidade>, res: Response) =>{
let validatedData: ICidade | undefined = undefined;

    try{
        validatedData = await bodyValidation.validate(req.body);
    }catch(error){
        const yupError = error as yup.ValidationError;

        res.json({
            erros:{
                default: yupError.message,
            }
        });
    }

    console.log(req.body.name);

    res.send('Create');
};