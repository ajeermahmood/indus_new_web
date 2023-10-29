import axios from "axios";

export async function getAllPropTypesCount() {
  const response = await axios.get(
    "https://indusspeciality.com/api/listings/get_all_proptypes_listings_count.php"
  );
  return response.data;
}

export async function getFeaturedBlogs() {
  const response = await axios.get(
    "https://indusspeciality.com/api/listings/get_featured_blogs.php"
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

export async function getAgentDetails(id) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_agents_details.php",
    {
      agent_id: id,
    }
  );
  return response.data;
}

export async function getBlogDetails(id) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_blog_details.php",
    {
      blog_id: id,
    }
  );
  return response.data;
}

export async function getAgentPropertiesLimit4(id, status) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_agents_properties_limit_4.php",
    {
      agent_id: id,
      status: status,
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

export async function getAllAgents(limit, pageNumber, search) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_all_agents.php",
    {
      limit: limit,
      pageNumber: pageNumber,
      search: search,
    }
  );
  return response.data;
}

export async function getAllNews(limit, pageNumber, filter) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_all_blogs.php",
    {
      limit: limit,
      pageNumber: pageNumber,
      filter: filter,
    }
  );
  return response.data;
}
