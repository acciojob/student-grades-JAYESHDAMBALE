//your JS code here. If required.
async function fetchAndCalculateAverages() {
  try {
    // Fetch the file asynchronously
    const response = await fetch('./students.json'); 
    
    if (!response.ok) {
      throw new Error('Failed to fetch the file');
    }

    const csvData = await response.text();

    // Split the CSV into rows
    const rows = csvData.trim().split('\n');

    // Extract headers and data rows
    const [header, ...studentRows] = rows;

    studentRows.forEach(row => {
      // Split row by comma (e.g., "John,80,90,70")
      const columns = row.split(',');
      const name = columns[0];
      
      // Get all grades after the name, convert to numbers
      const grades = columns.slice(1).map(Number);
      
      // Calculate Average
      const total = grades.reduce((acc, grade) => acc + grade, 0);
      const average = total / grades.length;

      // Log the result
      console.log(`${name}: ${average.toFixed(2)}`);
    });

  } catch (error) {
    console.error('Error processing data:', error);
  }
}

// Execute the function
fetchAndCalculateAverages();