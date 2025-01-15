'use client';

import { useState } from 'react';
import { getPhotoList, Photo } from '../../api/post';
import { useQuery } from '@tanstack/react-query';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ListItem from './ListItem';

export default function List({ initialData }: { initialData: Photo[] }) {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ['photos', page],
    queryFn: () => getPhotoList(page),
  });

  // 페이지 변경 시
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  /* data가 반환 될 때 생성 */
  return (
    <>
      <h3>Photos</h3>
      {/* <p>count: {data?.length}</p> */}
      <ul>
        {data?.map((photo) => (
          <ListItem
            key={photo.id}
            listInfo={photo}
          />
        ))}
      </ul>
      <Stack spacing={2}>
        <Pagination
          count={10}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </>
  );
}
