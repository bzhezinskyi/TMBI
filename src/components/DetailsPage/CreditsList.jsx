import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from 'services/themoviedb/themoviedb.services';

export default function CreditsList() {
  const { mediaType, id } = useParams();

  const handleCreditsList = async (id, mediaType) => {
    const data = await getDetails({ id, mediaType, detail: '/credits' }).then();
    return data.cast;
  };

  useEffect(() => {
    handleCreditsList(id, mediaType);
  }, [id, mediaType]);

  return;
}
