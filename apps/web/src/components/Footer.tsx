'use client'

export const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-blue-900 text-neutral-content">
        <nav>
          <h6 className="text-white font-bold text-lg">Tentang GetTicket.Id</h6>
          <a className="link link-hover">Syarat dan Ketentuan</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Laporan Kesalahan Sistem</a>
        </nav>
        <nav>
          <h6 className="text-white font-bold text-lg">Rayakan Event</h6>
          <a className="link link-hover">Cara Mempersiapkan Event</a>
          <a className="link link-hover">Cara Membuat Event</a>
          <a className="link link-hover">Cara Mengelola Event</a>
          <a className="link link-hover">Cara Mempublikasikan Event</a>
        </nav>
        <nav>
          <h6 className="text-white font-bold text-lg">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

