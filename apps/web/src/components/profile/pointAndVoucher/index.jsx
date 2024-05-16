import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PointsAndDiscount() {
  const [points, setPoints] = useState([]);
  const [voucher, setVoucher] = useState([]);

  const stateUser = useSelector((state) => state.user);

  useEffect(() => {
    if (stateUser?.username) {
      setPoints(stateUser.points);
      setVoucher(stateUser.discountVoucher);
    }
  }, [stateUser]);

  useEffect(() => {
    if (stateUser?.username) {
      setPoints(stateUser.points);
      setVoucher(stateUser.discountVoucher);
    }
  }, []);
  return (
    <>
      <div className="collapse collapse-arrow bg-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-semibold">Points</div>
        <div className="collapse-content">
          <Link href={'/carievent'}>
            <span>
              {points.map((item, index) => (
                <li key={index}>
                  <span
                    href="#"
                    className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                  >
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                    <div className="sm:flex sm:justify-between sm:gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                          {item.balance}
                        </h3>

                        <p className="mt-1 text-xs font-medium text-gray-600">
                          Available until:{' '}
                          {new Date(item.expiredDate).getDate()} -
                          {new Date(item.expiredDate).getMonth()} -
                          {new Date(item.expiredDate).getFullYear()}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-pretty text-sm text-gray-500">
                        Tukar point untuk mendapatkan tiket dengan harga yang
                        lebih murah!
                      </p>
                    </div>
                  </span>
                </li>
              ))}
            </span>
          </Link>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-white">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-semibold">Vouchers</div>
        <div className="collapse-content">
          <Link href={'/carievent'}>
            <span>
              {voucher.map((item, index) => (
                <li key={index}>
                  <span
                    href="#"
                    className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                  >
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                    <div className="sm:flex sm:justify-between sm:gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                          {item.value * 100}%
                        </h3>

                        <p className="mt-1 text-xs font-medium text-gray-600">
                          Available until:{' '}
                          {new Date(item.expiredDate).getDate()} -
                          {new Date(item.expiredDate).getMonth()} -
                          {new Date(item.expiredDate).getFullYear()}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-pretty text-sm text-gray-500">
                        Tukar voucher untuk mendapatkan tiket dengan harga yang
                        lebih murah!
                      </p>
                    </div>
                  </span>
                </li>
              ))}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
