import Image from 'next/image';

export default function CardEvent() {
  return (
    <>
      <div className="bg-white rounded-lg p-5 shadow-xl mt-3 lg:w-72">
        <div>
          <Image src={''} width={100} height={100} alt="Event Image"></Image>
        </div>
        <div>
          <h1 className='mt-2 font-semibold'>Event Name</h1>
          <h2 className='mt-2'>Tanggal Dan Waktu</h2>
          <h2 className='mt-2'>Lokasi</h2>
          <br />
          <hr />
          <h2 className="text-orange-400 mt-4">Harga</h2>
        </div>
      </div>
    </>
  );
}
