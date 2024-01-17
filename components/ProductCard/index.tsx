import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import RatingCard from '../RatingCard';

interface ProductCardProps {
  imageUrl?: string;
  title: string;
  price: string;
  buttonText: string;
}

const img = require('../../public/pizza.jpg');

const ProductCard: FC<ProductCardProps> = ({
  imageUrl,
  title,
  price,
  buttonText,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow md:rouded-none dark:bg-white dark:border-gray-700">

        <div>
          <a href="#">
            <Image className="rounded-t-lg h-80" src={img} alt="bg_card" />
          </a>
        </div>
        <div >
          <div className="p-5 h-20 bg-amber-600/50 flex md:flex-col justify-between items-center">
            <div className="flex gap-2">
              <div className="w-7 h-7 bg-amber-700/50 rounded-full flex items-center justify-center">
                <span>P</span>
              </div>
              <div className="w-7 h-7 bg-amber-700/50 rounded-full flex items-center justify-center">
                <span>G</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative inline-block text-left">
                <select className="block appearance-none bg-amber-700/50  text-white-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                  <option>Nenhuma</option>
                  <option>Catupiry</option>
                  <option>Cheddar</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  ✔
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 bg-red-700/50 flex flex-row">
            <div>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-rose-950">
                  Pizza de Calabresa
                </h5>
              </a>

              <RatingCard title="Avaliações" rating="4.8" />

              <p className="mb-3 font-normal dark:text-gray-800	">
                Queijo, presunto, bacom, calabresa e catupiri
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-2xl font-bold text-center text-rose-950 rounded-lg "
            >
              R$ 49,00
            </a>
          </div>

          <div>
            <button
              type="button"
              className="w-full text-white bg-red-700 hover:bg-red-800 focus:outline-none  font-medium  rounded-b-lg text-sm px-5 py-8 text-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              <h2>3 items, 48,50</h2>
              <h1>Adicionar</h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
