const result = document.querySelector(".result");

const fetchData = async () => {
  try {
    const { data } = await axios.get("/api/hello");
    // console.log(data);
    result.textContent = data;
  } catch (error) {
    console.log(error);
    result.textContent = error.response.data;
  }
};

fetchData();
