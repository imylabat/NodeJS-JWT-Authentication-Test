// frontend/src/pages/Summary.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import axios from 'axios';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  CartesianGrid, Legend
} from 'recharts';

export default function Summary() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);

useEffect(() => {
  async function fetchChart() {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:3000/api/chart/summary', {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Summary API response:", res.data);

      setTitle(res.data.title || 'Summary');

      // NEW — EXTRACT THE CHART DATA
      setChartData({
        labels: res.data.data.labels,
        values: res.data.data.values
      });

    } catch (err) {
      console.error('Error fetching summary', err);
    } finally {
      setLoading(false);
    }
  }

  fetchChart();
}, []);


  return (
    <div>
      <Navbar />
      <main style={{ padding: '1.5rem' }}>
        <h1>Summary</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <section aria-labelledby="summary-chart" style={{ height: 360 }}>
              <h2 id="summary-chart">{title}</h2>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="Impact (0–100)" />
                </BarChart>
              </ResponsiveContainer>
            </section>

            <section style={{ marginTop: '1rem' }}>
              <p>
                This bar chart shows the perceived impact (0–100) of ten health-care innovations identified by Deloitte. 
              </p>
              <p>
                <strong>Source:</strong>{' '}
                <a href="https://www2.deloitte.com/us/en/pages/life-sciences-and-health-care/articles/top-health-care-innovations.html" target="_blank" rel="noopener noreferrer">
                  Deloitte — Top 10 Health Care Innovations
                </a>
              </p>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
