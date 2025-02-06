import React, { useEffect, useState } from 'react';
import { generateClient } from '@aws-amplify/api';
import { Table, TableCell, TableBody, TableHead, TableRow } from '@aws-amplify/ui-react';

function App() {
  const [data, setData] = useState([]);
  const client = generateClient();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await client.get('WifiUsageAPI', '/usage');
      setData(JSON.parse(response.body));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>WiFi使用量モニター</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>社員番号</TableCell>
            <TableCell>名前</TableCell>
            <TableCell>電話番号</TableCell>
            <TableCell>使用量(GB)</TableCell>
            <TableCell>日時</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.employeeId}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.phoneNumber}</TableCell>
              <TableCell>{item.gbUsage}</TableCell>
              <TableCell>{new Date(item.timestamp).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

// 以下の行を追加
export default App;
