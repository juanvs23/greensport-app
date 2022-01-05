import Validator from 'validatorjs';
/**
 * validate data
 * @param {string} info
 * @param {string} type
 * @returns Array
 */
export  const checkInfo = (info:object, type = "text"):(string|boolean)[] => {
    let rules={
        email: 'required|email',
        password:'required|min:8|alpha_num'
    }
   let errors:(string|boolean)[]=[]
    let validation = new Validator(info, rules);
    validation.fails();
   if (validation.errors) {
     
       if (validation.errors.get('email')) {
           errors.push(validation.errors.first('email'))
       }
       if (validation.errors.get('pass')) {
        errors.push(validation.errors.first('password'))
    }
   }
   
   return errors
  };