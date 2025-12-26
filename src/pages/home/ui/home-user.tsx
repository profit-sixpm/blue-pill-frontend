import { useQuery } from "@tanstack/react-query";
import { homeQueries, useDeleteHome } from "@/entities/home";
import { Button } from "@/shared/ui/button";

export const HomeUser = () => {
  const { data: users, isLoading } = useQuery(homeQueries.list());
  const { mutate: deleteUser } = useDeleteHome();

  const handleDelete = (id: string) => {
    deleteUser({ id });
  };

  if (isLoading) {
    return <div className="text-gray-500">로딩중...</div>;
  }

  return (
    <div className="rounded-lg border p-4">
      <h1 className="mb-4 text-xl font-bold">사용자 리스트</h1>
      <ul className="space-y-2">
        {users?.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between rounded bg-gray-50 p-2"
          >
            <span>
              {user.id} - {user.name}
            </span>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleDelete(user.id)}
            >
              삭제
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
