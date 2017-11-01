using Carfinance.Phoenix.Kata.Angular.Models;
using Carfinance.Phoenix.Kata.Angular.Services.Interfaces;
using System.Collections.Generic;

namespace Carfinance.Phoenix.Kata.Angular.Services
{
    public class BookingService : IBookingService
    {
        private static IList<Booking> bookings;

        public BookingService() : this(new DataService())
        {
        }

        public BookingService(IDataService dataService)
        {
            bookings = dataService.Initialize();
        }

        public IList<Booking> GetAllBookings()
        {
            return bookings;
        }

        public void CreateBooking(Booking booking)
        {
            if (booking == null)
            {
                throw new System.ArgumentNullException();
            }
            if (booking.TableNumber > 4 || booking.TableNumber < 1)
            {
                throw new System.ArgumentOutOfRangeException("Table number " + booking.TableNumber + " does not exist");
            }
           
            bookings.Add(booking);
        }
    }
}