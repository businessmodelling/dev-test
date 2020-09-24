namespace RestaurantListings.Data.Entities
{
    public class Restaurant
    {
        public int Id { get; private set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string PhoneNumber { get; set; }

        public int Rating { get; set; }

        public bool FamilyFriendly { get; set; }

        public bool VeganFriendly { get; set; }

        public string[] Tags { get; set; }
    }
}
