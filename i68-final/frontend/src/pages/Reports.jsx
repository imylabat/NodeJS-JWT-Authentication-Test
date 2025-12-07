// frontend/src/pages/Reports.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend
} from 'recharts';
import Navbar from '../components/NavBar';


export default function Reports() {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChart() {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:3000/api/chart/reports', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTitle(res.data.title || 'Adoption readiness');
        setData(res.data.data || []);
      } catch (err) {
        console.error('Error fetching reports chart', err);
        setData([]);
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
        <h1>Reports</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <section aria-labelledby="reports-chart" style={{ height: 360 }}>
              <h2 id="reports-chart">{title}</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" interval={0} angle={-45} textAnchor="end" height={70} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="Adoption readiness (%)" />
                </BarChart>
              </ResponsiveContainer>
            </section>

            <section style={{ marginTop: '1rem' }}>
              <p>
                This bar chart shows a hypothetical estimate of adoption readiness (%) among leaders for each of the top ten innovations. Values are illustrative and intended to reflect relative readiness levels from the Deloitte report's perspective.
              </p>
              <p>
                <strong>Source:</strong>{' '}
                <a
                  href="https://www2.deloitte.com/us/en/pages/life-sciences-and-health-care/articles/top-health-care-innovations.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
