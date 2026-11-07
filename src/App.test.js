import { render, screen } from '@testing-library/react';
import App from './App';
import { SKILLS_DATA } from './SkillsMatrix';

test('renders network engineering copy and the official Booz title', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /mason coco/i })).toBeInTheDocument();
  expect(screen.getByText('Network & Infrastructure Engineering')).toBeInTheDocument();
  const booz = screen.getByRole('heading', { name: /Cyber Range Engineer \/ Cyber Warfare Engineer/i }).closest('.education-entry');
  expect(booz).toHaveTextContent(/Booz Allen Hamilton/);
  expect(booz).toHaveTextContent(/Jul 2026 - Present/);
  expect(booz).toHaveTextContent(/Configured enterprise network infrastructure, routing, and traffic redirectors/);
  expect(booz).toHaveTextContent(/Used Terraform for infrastructure as code/);
  expect(booz).toHaveTextContent(/Configured SIEM platforms for security monitoring/);
  expect(booz).toHaveTextContent(/Configured satellite communications equipment/);
  expect(booz).not.toHaveTextContent(/hundreds/i);
  expect(booz).not.toHaveTextContent(/environment/i);
  expect(booz).not.toHaveTextContent(/1,594/);
  expect(booz).not.toHaveTextContent(/40%/);
  expect(booz).not.toHaveTextContent(/BGP/);
  expect(booz).not.toHaveTextContent(/Bash/);
  expect(booz).not.toHaveTextContent(/fiber/i);
  const about = document.querySelector('#about');
  expect(about).toHaveTextContent(/hundreds of cyber ranges/);
  expect(about).toHaveTextContent(/Terraform/);
  const cole = screen.getByRole('heading', { name: 'Cyber Security Systems Engineer' }).closest('.education-entry');
  expect(cole).toHaveTextContent(/Built physical servers, installed fiber-optic cabling/);
  expect(cole).toHaveTextContent(/managed VMware virtualization/);
  expect(cole).not.toHaveTextContent(/exercise environments/i);
  expect(cole).toHaveTextContent(/17 sites and 1,594 devices/);
  expect(cole).toHaveTextContent(/40%/);
  expect(cole).toHaveTextContent(/BGP and OSPF/);
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
  const bgp = SKILLS_DATA.find(skill => skill.name.startsWith('BGP'));
  expect(JSON.stringify(bgp.sources)).not.toMatch(/Booz/i);
  const vmware = SKILLS_DATA.find(skill => skill.name.startsWith('VMware'));
  expect(JSON.stringify(vmware.sources)).not.toMatch(/Booz/i);
  const siem = SKILLS_DATA.find(skill => skill.name.startsWith('SIEM'));
  const ranges = SKILLS_DATA.find(skill => skill.name.startsWith('CTF'));
  expect(JSON.stringify(ranges.sources)).toMatch(/Booz Allen — Cyber Range Engineer/);
  expect(JSON.stringify(siem.sources)).toMatch(/SIEM platforms for security monitoring/);
  const iac = SKILLS_DATA.find(skill => skill.name.startsWith('Infrastructure as Code'));
  expect(JSON.stringify(iac.sources)).toMatch(/Booz Allen — Terraform for infrastructure as code/);
  expect(JSON.stringify(iac.sources)).not.toMatch(/module|pipeline|faster/i);
  const python = SKILLS_DATA.find(skill => skill.name === 'Python');
  expect(JSON.stringify(python.sources)).not.toMatch(/Booz/i);
  const bash = SKILLS_DATA.find(skill => skill.name.startsWith('Bash'));
  expect(JSON.stringify(bash.sources)).not.toMatch(/Booz/i);
  const cabling = SKILLS_DATA.find(skill => skill.name.startsWith('Cabling'));
  expect(JSON.stringify(cabling.sources)).toMatch(/Cole Engineering — fiber-optic cabling installation/);
});
