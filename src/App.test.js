import { render, screen } from '@testing-library/react';
import App from './App';
import { SKILLS_DATA } from './SkillsMatrix';

test('renders the current role inside the terminal portfolio', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /mason coco/i })).toBeInTheDocument();
  expect(screen.getByText('Cyber Range Engineer')).toBeInTheDocument();
  expect(screen.getAllByText(/Cyber Warfare Engineer/).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Booz Allen Hamilton/).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { name: /Cyber Range Engineer \/ Cyber Warfare Engineer/i })).toBeInTheDocument();
  expect(screen.getByText(/Sep 2025 - Jul 2026/)).toBeInTheDocument();
});

test('lists earned certifications and omits CPTS and CISM pursuit', () => {
  render(<App />);
  expect(screen.getByText(/CompTIA SecurityX \(CASP\+\)/)).toBeInTheDocument();
  expect(screen.getByText(/Certified Ethical Hacker Master/)).toBeInTheDocument();
  expect(screen.getByText(/CompTIA CySA\+/)).toBeInTheDocument();
  expect(screen.getByText(/CompTIA PenTest\+/)).toBeInTheDocument();
  expect(screen.queryByText(/CPTS/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/CISM/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/in progress/i)).not.toBeInTheDocument();
});

test('keeps the contact form and hacking terminal boot sequence', () => {
  render(<App />);
  const form = document.querySelector('form.contact-actual-form');
  expect(form).toHaveAttribute('action', 'https://formspree.io/f/xleqykrp');
  expect(screen.getByText(/Injecting payload into target/)).toBeInTheDocument();
  expect(screen.getByText(/ACCESS GRANTED/)).toBeInTheDocument();
});

test('skills evidence does not cite CPTS or CISM', () => {
  const blob = JSON.stringify(SKILLS_DATA);
  expect(SKILLS_DATA.length).toBeGreaterThan(50);
  expect(blob).not.toMatch(/CPTS/i);
  expect(blob).not.toMatch(/CISM/i);
  expect(SKILLS_DATA.every(skill => skill.sources.length > 0)).toBe(true);
});
