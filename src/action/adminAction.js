import axios from 'axios' 


export const startAdminRegister = (adminData,reset) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/admin/register',adminData)
            .then((res) => {
                const result = res.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                    // console.log(result);
                } else {
                    alert('Registration successfull!!!')
                }
            })
    }
}