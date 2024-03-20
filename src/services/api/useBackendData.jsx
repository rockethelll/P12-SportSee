/**
 * Fetch main data from API
 * @param {String} url
 * @param {Number} id
 * @return {Promise}
 * @return {Promise.resolve<String>} data
 * @return {Promise.resolve<Boolean>} loading
 * @return {Promise.reject<Error>} error
 */
// const mockData = import.meta.env.VITE_MOCKED_URL;
const useBackendData = () => {
  const useFetchMainData = ({ id }) => {
    return <p>je suis useFetch de backend avec l'id {id}</p>;
  };

  const useFetchAcitivty = ({ id }) => {
    return <p>je suis useActivity de backend avec l'id {id}</p>;
  };
  return { useFetchMainData, useFetchAcitivty };
};

export default useBackendData;
