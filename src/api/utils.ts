export async function GetRequest<T>(url: string, headers?: HeadersInit): Promise<T> {
  const res = await fetch(url, {
    method: "GET",
    headers,
  });

  return res.json();
}

export async function PostRequest<T, S>(url: string, body: T, headers?: HeadersInit): Promise<S> {
  const bodyJson = JSON.stringify(body);

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: bodyJson,
  });

  return res.json();
}

export async function PutRequest<T, S>(url: string, body: T, headers?: HeadersInit): Promise<S> {
  const bodyJson = JSON.stringify(body);

  const res = await fetch(url, {
    method: "PUT",
    headers,
    body: bodyJson,
  });

  return res.json();
}

export async function DeleteRequest<T, S>(url: string, body: T, headers?: HeadersInit) {
  const bodyJson = JSON.stringify(body);

  const res = await fetch(url, {
    method: "DELETE",
    headers,
    body: bodyJson,
  });

  return res.json();
}
