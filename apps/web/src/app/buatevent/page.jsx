'use client';

import { useState } from 'react';
import { DatePickerField } from '@/components/cores/DatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, Form, Field } from 'formik';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useCreateEvent } from '../../hooks/CreateEvent/useCreateEvent';

export default function CreateEvent() {
  const [images, setImages] = useState([]);
  const { mutationCreateEvent } = useCreateEvent();

  const getData = localStorage.getItem('persist:main-root');
  const Data = JSON.parse(getData);
  const user = Data.user;
  const userData = JSON.parse(user);

  const onSetFiles = (event) => {
    try {
      const acceptedFormat = ['jpg', 'jpeg', 'webp', 'png'];
      const files = [...event.target.files];

      files.forEach((file) => {
        if (
          !acceptedFormat.includes(
            file.name.split('.')[file.name.split('.').length - 1],
          )
        ) {
          throw { message: `${file.name} Format Not Acceptable` };
        }
        if (file.size > 1000000000000000) {
          throw {
            message: `${file.name} is too Large! Maximum Filesize is 1Kb`,
          };
        }
      });

      if (files.length > 3) throw { message: 'Selected Files more than 3' };

      setImages(files);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white text-center">
            Buat Event
          </h2>

          <Formik
            initialValues={{
              name: '',
              eventOrganizer: userData?.username,
              startDate: '',
              endDate: '',
              startTime: '',
              endTime: '',
              city: '',
              address: '',
              description: '',
              availableSeat: 0,
              price: 0,
              eventType: '',
              categoryId: 0,
            }}
            onSubmit={(values, availableSeat) => {
              console.log(values);
              const fd = new FormData();
              fd.append(
                'data',
                JSON.stringify({
                  name: values.name,
                  eventOrganizer: values.eventOrganizer,
                  startDate: values.startDate,
                  endDate: values.endDate,
                  startTime: values.startTime,
                  endTime: values.endTime,
                  city: values.city,
                  address: values.address,
                  description: values.description,
                  availableSeat: values.availableSeat,
                  price: values.price,
                  eventType: values.eventType,
                  categoryId: values.categoryId,
                }),
              );
              images.forEach((file) => {
                fd.append('images', file);
              });

              console.log(values);
              mutationCreateEvent(fd);
              // handleEvent(fd)
            }}
          >
            {({ dirty, isValid }) => {
              return (
                <Form>
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="sm:col-span-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Nama Event
                      </label>
                      <Field
                        type="text"
                        name="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Nama Event"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Diselenggarakan Oleh
                      </label>
                      <Field
                        type="text"
                        name="eventOrganizer"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Event Organizer"
                        required
                        disabled={true}
                      />
                    </div>
                    <div className="w-full">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Kategori
                      </label>
                      <Field
                        as="select"
                        name="categoryId"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required
                      >
                        <option value="0">Pilih Kategori</option>
                        <option value="1">Hiburan</option>
                        <option value="2">Musik</option>
                        <option value="3">Edukasi</option>
                      </Field>
                    </div>
                    {/** Untuk Tanggal Dan Waktu */}
                    <div className="flex flex-col">
                      <label className="block text-sm mb-2 font-medium text-gray-900 dark:text-white">
                        Mulai
                      </label>
                      <DatePickerField name="startDate" />
                      <label className="block text-sm mb-2 mt-3 font-medium text-gray-900 dark:text-white">
                        Berakhir
                      </label>
                      <DatePickerField name="endDate" />
                    </div>
                    <div className="flex flex-col">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Jam Mulai
                      </label>
                      <Field
                        type="time"
                        name="startTime"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Jam Mulai"
                        required
                      />
                      <label className="block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-white">
                        Jam Berakhir
                      </label>
                      <Field
                        type="time"
                        name="endTime"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Jam Berakhir"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Kota
                      </label>
                      <Field
                        type="text"
                        name="city"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Kota"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Alamat
                      </label>
                      <Field
                        type="text"
                        name="address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Alamat"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Jumlah Kursi Tersedia
                      </label>
                      {/* <div className='flex flex-row justify-between items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'>
                        <button className='btn btn-primary' onClick={decrement} disabled={availableSeat === 0}>-</button>
                        <span>{availableSeat}</span>
                        <button className='btn btn-neutral' onClick={increment}>+</button>
                      </div> */}
                      <Field
                        type="text"
                        name="availableSeat"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Jumlah Kursi"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Harga
                      </label>
                      <Field
                        type="text"
                        name="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Harga Event"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Tipe Event
                      </label>
                      <Field
                        type="text"
                        name="eventType"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Tipe Event"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Unggah Poster Event
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(event) => onSetFiles(event)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Upload Gambar"
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Deskripsi
                      </label>
                      <Field
                        as="textarea"
                        name="description"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Tulis Description"
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-neutral my-5">
                    Tambah Event
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </section>
    </>
  );
}
