const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f66158d720aa24fd4f5013aa0fac1474',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;