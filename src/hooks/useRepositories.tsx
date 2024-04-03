import { useState, useEffect } from 'react';
import { RepositoriesType } from '../components/RepositoryList';

const useRepositories = () => {
  const [repositories, setRepositories] = useState<RepositoriesType>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchRepositories = async () => {   
    setLoading(true);
    const response = await fetch('http://192.168.1.7:5000/api/repositories');
    const json = await response.json();
    
    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);
  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;