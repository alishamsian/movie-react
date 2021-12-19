const apiConfig={
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'fef929970fbb7eabfc9b96c8fe022227',
    originaliImage: (imgPath)=>`https://image.tmdb.org/t/p/orginaly/${imgPath}`,
    w500Image: (imgPath)=>`https://image.tmdb.org/t/p/w500/${imgPath}`
}
export default apiConfig;