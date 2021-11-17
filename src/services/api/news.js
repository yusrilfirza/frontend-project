import { getNews } from '../../helpers/api';

export const News = {
    getNews: () => getNews('/cnn/terbaru'),
};

export default News;
