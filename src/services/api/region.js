import { getRegion } from '../../helpers/api';

export const Region = {
    getProvince: () => getRegion('/daerahindonesia/provinsi'),
    getSpecificCity: (id) => getRegion(`/daerahindonesia/kota?id_provinsi=${id}`),
};

export default Region;
