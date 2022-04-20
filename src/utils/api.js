import axios from 'axios';


const newApi = axios.create({
    baseURL: 'https://first-api-project1.herokuapp.com/api',
})

export const getArticles = () => {
    return newApi.get('/articles')
    .then((response) => {
        return(response.data);
    })
}

export const getSingleArticles = (article_id) => {
    return newApi.get(`/articles/${article_id}`)
    .then((response) => {
        return(response.data);
    })
}
