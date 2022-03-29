interface PerformRequestParameters {
  baseUrl: string;
  method?: string;
  path: string;
  body?: unknown;
  token?: string;
}

const performRequest = async <T>({
  baseUrl,
  method,
  path,
  body,
  token,
}: PerformRequestParameters): Promise<T> => {
  const options = {
    method,
    headers: {
      'Content-type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    body: body ? JSON.stringify(body) : undefined,
  };
  const response = await fetch(`${baseUrl}${path}`, options).then(
    // eslint-disable-next-line no-shadow
    (response) => {
      if (response.status < 300) {
        const result = response.json();
        return result;
      }
      throw Error('Server error');
    },
  );
  return response;
};

export default performRequest;
