import axios from "axios";

export async function getAllPropTypesCount() {
  const response = await axios.get(
    "https://indusspeciality.com/api/listings/get_all_proptypes_listings_count.php"
  );
  return response.data;
}

export async function getFeaturedListings(status) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_featured_listings.php",
    {
      status: status,
    }
  );
  return response.data;
}

export async function getPropertyDetails(id) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_property_details.php",
    {
      prop_id: id,
    }
  );
  return response.data;
}

export async function getAllListingsPagination(limit, pageNumber, filter) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_all_listings_pagination.php",
    {
      limit: limit,
      pageNumber: pageNumber,
      filter: filter,
    }
  );
  return response.data;
}

export async function getAllAgents(limit, pageNumber, filter) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_all_agents.php",
    {
      limit: limit,
      pageNumber: pageNumber,
      filter: filter,
    }
  );
  return response.data;
}
