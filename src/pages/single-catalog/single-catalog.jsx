import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCatalog } from './service/useGetCatalog';
import { ProductCard } from '../../components/product-card/product-card';
import { useGetBrand } from './service/useGetBrand';

export const SingleCatalog = () => {
    const { datakey } = useParams();
    const { data } = useGetCatalog({ datakey });
    const { data: brandData } = useGetBrand();

    const [selectedBrands, setSelectedBrands] = useState([]);
    const [visibleBrands, setVisibleBrands] = useState([]);
    const [showAllBrands, setShowAllBrands] = useState(false);

    useEffect(() => {
        const savedFilter = localStorage.getItem('selectedBrands');
        if (savedFilter) {
            setSelectedBrands(JSON.parse(savedFilter));
        }
    }, []);

    useEffect(() => {
        setVisibleBrands(brandData?.slice(0, 5));
    }, [brandData]);

    const handleBrandSelection = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter(b => b !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

    const handleResetFilter = () => {
        setSelectedBrands([]);
        localStorage.removeItem('selectedBrands');
    };

    useEffect(() => {
        localStorage.setItem('selectedBrands', JSON.stringify(selectedBrands));
    }, [selectedBrands]);

    const filteredProducts = data?.filter(item => {
        if (selectedBrands.length === 0) {
            return true;
        }
        return selectedBrands.includes(item.brand);
    });

    const handleToggleBrands = () => {
        if (showAllBrands) {
            setVisibleBrands(brandData?.slice(0, 5));
        } else {
            setVisibleBrands(brandData);
        }
        setShowAllBrands(!showAllBrands);
    };

    return (
        <div className="container mt-[150px] max-sm:mt-[165px] grid grid-cols-12 max-sm:gap-0 gap-6">
            <div className="col-span-9 max-sm:col-span-12">
                <h2 className="text-2xl font-medium mb-6">Продукты</h2>
                <div className="grid grid-cols-4 max-sm:flex max-sm:justify-center max-sm:gap-3 max-sm:flex-wrap gap-6 ">
                    {filteredProducts?.map(item => (
                        <ProductCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
            <div className="col-span-3 max-sm:hidden max-h-[500px] sticky top-[160px] overflow-y-auto ">
                <div className="bg-gray-100  p-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-4">Фильтр по брендам</h3>
                    {visibleBrands?.map(item => (
                        <label key={item.id} className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                value={item.brand}
                                checked={selectedBrands.includes(item.brand)}
                                onChange={() => handleBrandSelection(item.brand)}
                                className="mr-2"
                            />
                            <span>{item.brand}</span>
                        </label>
                    ))}
                    {brandData && brandData.length > 5 && (
                        <button onClick={handleToggleBrands} className="flex items-center gap-2 text-[#3DBFFE] flex-row-reverse pb-2  mt-4 rounded-lg ">
                            {showAllBrands ? 'Показать меньше' : 'Показать больше'}
                            <svg
                                className={`${showAllBrands ? 'transform rotate-180' : ''
                                    } w-5 h-5 transition-transform`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                    )}
                    <button onClick={handleResetFilter} className="bg-red-400 text-white py-2 px-4 mt-4 rounded-lg hover:bg-red-500">Сбросить фильтр</button>
                </div>
            </div>
        </div>
    );
};
