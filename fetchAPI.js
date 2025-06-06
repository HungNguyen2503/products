export let fetchApi = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Lỗi trong fetchApi:', error);
    throw error; // hoặc return null nếu bạn muốn gọi hàm không bị crash
  }
};
