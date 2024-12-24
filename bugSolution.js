The solution involves using the return value of useEffect to handle cleanup of asynchronous operations.  This ensures that any in-flight requests are canceled before the component unmounts, preventing potential crashes.

```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal; //Use abort controller to handle cancellation
    const fetchData = async () => {
      try {
        const response = await fetch('some-api-endpoint', { signal });
        const json = await response.json();
        setData(json);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error fetching data:', error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => controller.abort(); // Clean up on unmount
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (data === null) {
    return <Text>Error loading data</Text>;
  }
  return (
    <View>
      {/* Display data here */}
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default MyComponent; 
```