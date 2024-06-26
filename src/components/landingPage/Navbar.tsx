'use client';
import { useState } from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Link from 'next/link';

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  const handleClick = () => {
    setExpand(!expand);
  };
  return (
    <nav className="sticky top-0  z-50">
      <div className="flex backdrop-blur-xl justify-center w-full">
        <div className="w-11/12 px-5 py-6 flex items-center justify-between">
          <div>
            <Link href="">
              <span className="font-bold text-lg lg:text-2xl">Qiblat </span>
              <span className="text-[#F55F1D]  text-lg font-bold lg:text-2xl">
                Digital
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:flex items-center gap-8">
              <Link href="">
                <div className="font-semibold">About</div>
              </Link>
              <Link href="">
                <div className="font-semibold">Product</div>
              </Link>
              <Link href="">
                <div className="font-semibold">Pricing</div>
              </Link>
              <Button type="primary">Masuk</Button>
            </div>
            <div className="lg:hidden">
              <div onClick={handleClick}>
                {!expand ? (
                  <MenuOutlined className="text-2xl" />
                ) : (
                  <CloseOutlined className="text-2xl font-bold" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {expand && (
        <div className="w-full grid text-center py-3 absolute bg-white px-2 ">
          <Link className="border-b py-1" href="">
            <div className="font-semibold">About</div>
          </Link>
          <Link className="border-b py-1" href="">
            <div className="font-semibold">Product</div>
          </Link>
          <Link className="border-b py-1" href="">
            <div className="font-semibold">Pricing</div>
          </Link>
          <div className="py-4">
            <Button block type="primary">
              Masuk
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
