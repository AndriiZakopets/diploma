import { useState, useEffect, useMemo } from 'react';
import { debounce } from 'lodash';

function useDebounce<T>(query: T, timeout: number): T {
  const [value, setValue] = useState<T>(query);

  const debouncedSetValue = useMemo(
    () => debounce(setValue, timeout),
    [timeout]
  );

  useEffect(() => {
    debouncedSetValue(query);
  }, [debouncedSetValue, query]);

  return value;
}

export default useDebounce;
