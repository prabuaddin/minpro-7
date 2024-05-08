import Image from 'next/image';

export default function CardEvent() {
  return (
    <>
      <div className="bg-white border border-gray-800 rounded-lg p-5 w-56 ">
        <div>
          <Image src={''} width={100} height={100} alt="Event Image"></Image>
        </div>
        <div>
          <h1 className='mt-2'>Event Name</h1>
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
