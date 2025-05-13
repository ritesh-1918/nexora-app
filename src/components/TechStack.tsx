const [techData, setTechData] = useState(null);
useEffect(() => {
  const fetchTechStack = async () => {
    const response = await fetch('/api/technologies');
    const data = await response.json();
    setTechData(data);
  };
  fetchTechStack();
}, []);