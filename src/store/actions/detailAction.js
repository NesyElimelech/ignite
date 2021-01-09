import axios from 'axios';
import { gameDetailsURL } from '../../api';

const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id));

  dispatch({
    type: 'GET_DETAIL',
    payload: detailData.data,
  });
};

export default loadDetail;
