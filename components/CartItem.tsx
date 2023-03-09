import React from 'react';
import useSWR from 'swr';

type Props = {
  data: any;
};

const CartItem = (props: Props) => {
  const { data, error } = useSWR('CartItem', async () => {
    const res = await fetch(`https://laspag.onrender.com/api/account/list_menu/`);
    const data = await res.json();
    return data;
  });
  
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  
  return (
    <>
      <div className='w-full'>
        <h1 className='text-2xl font-bold text-center w-full mt-10'>CartItem</h1>
      </div>
      <div className='text-2xl'>{data.price}</div>
      {data.menu_title}
    </>
  );
};

export default CartItem;
