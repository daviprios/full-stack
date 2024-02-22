import { useQuery } from "@tanstack/react-query";

export type Agenda = {
  id: string;
  name: string;
  phoneNumber: string;
  alternativePhoneNumbers?: string[];
  address?: {
    street: string;
    streetNumber: string;
    neighborhood: string;
    city: string;
  };
};

export default function Home() {
  const nameSearch = useQuery({
    queryKey: ["name"],
    queryFn: async () =>
      (await (
        await fetch("http://localhost:8000/contacts")
      ).json()) as Agenda[],
  });

  return (
    <div>
      <h1>Lista de contato:</h1>
      <ul>
        {nameSearch.data?.map(({ name, id, phoneNumber }) => {
          return (
            <li key={id}>
              <div>
                <span>{id}</span>: <span>{name}</span> -{" "}
                <span>{phoneNumber}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
