
import  axios,{ AxiosResponse }  from 'axios';



const  getCards=async ()=>{
  let fetchCard=await axios.get<never, AxiosResponse>('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
  let cards= await fetchCard.data
  
    return cards;
}
export default getCards