import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ChevronDown } from 'lucide-react';

interface BookingFormProps {
  seatingType: 'table' | 'floor';
}

const BookingForm: React.FC<BookingFormProps> = ({ seatingType }) => {
  const { control, handleSubmit, watch } = useForm();
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would typically send the data to your backend
    alert('Booking submitted successfully!');
  };

  const selectedDate = watch('date');
  const selectedGuests = watch('guests');

  React.useEffect(() => {
    if (selectedDate && selectedGuests) {
      // This is where you would typically fetch available time slots from your backend
      // For now, we'll just set some dummy data
      setAvailableTimeSlots(['18:00', '19:30', '21:00']);
    }
  }, [selectedDate, selectedGuests]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <input type="hidden" name="form-name" value="booking" />
      <input type="hidden" name="seatingType" value={seatingType} />
      
      <div className="md:col-span-1">
        <Controller
          name="date"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker
              {...field}
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              minDate={new Date()}
              inline
              className="custom-calendar w-full"
              calendarClassName="custom-calendar-large"
              dayClassName={() => "custom-day"}
            />
          )}
        />
      </div>

      <div className="md:col-span-1 space-y-6">
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Guests
          </label>
          <Controller
            name="guests"
            control={control}
            rules={{ required: true, min: 1, max: 14 }}
            render={({ field }) => (
              <select
                {...field}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-burgundy focus:border-burgundy sm:text-sm rounded-md"
              >
                {[...Array(14)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            )}
          />
        </div>

        {availableTimeSlots.length > 0 && (
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
              Available Time Slots
            </label>
            <Controller
              name="time"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  {...field}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-burgundy focus:border-burgundy sm:text-sm rounded-md"
                >
                  <option value="">Select a time</option>
                  {availableTimeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-burgundy focus:border-burgundy sm:text-sm"
              />
            )}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            rules={{ required: true, pattern: /^\S+@\S+$/i }}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-burgundy focus:border-burgundy sm:text-sm"
              />
            )}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <Controller
            name="phone"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                type="tel"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-burgundy focus:border-burgundy sm:text-sm"
              />
            )}
          />
        </div>

        <div>
          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
            Special Requests
          </label>
          <Controller
            name="specialRequests"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                rows={3}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-burgundy focus:border-burgundy sm:text-sm"
              />
            )}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
        >
          Book Table
        </button>
      </div>
    </form>
  );
};

export default BookingForm;