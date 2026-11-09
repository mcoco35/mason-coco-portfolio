import React, { useState } from 'react';
import './SkillsMatrix.css';

export const SKILLS_DATA = [
  // ═══════════════════════════════════════
  //  NETWORKING & INFRASTRUCTURE
  // ═══════════════════════════════════════
  {
    name: 'TCP/IP & OSI Model',
    category: 'Networking',
    sources: [
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'work', label: 'Cole Engineering — Test Lead' },
      { type: 'cert', label: 'CompTIA Network+ — Networking Concepts' },
      { type: 'cert', label: 'CompTIA A+ — Networking' },
      { type: 'cert', label: 'CompTIA Security+ — Security Architecture' },
      { type: 'education', label: 'B.S. Computer Science — Computer Networks / Socket Programming' },
      { type: 'education', label: 'M.S. Cybersecurity — Network & Infrastructure Security' },
      { type: 'education', label: 'Bootcamp — Computer Networking Fundamentals' },
    ]
  },
  {
    name: 'BGP / OSPF / EIGRP',
    category: 'Networking',
    sources: [
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'cert', label: 'CompTIA Network+ — Network Implementation' },
      { type: 'education', label: 'Bootcamp — Computer Networking Fundamentals' },
    ]
  },
  {
    name: 'DNS',
    category: 'Networking',
    sources: [
      { type: 'work', label: 'Booz Allen — Windows Server administration including Active Directory and DNS' },
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'cert', label: 'CompTIA Network+ — Networking Concepts' },
      { type: 'cert', label: 'CompTIA Security+ — Security Operations' },
      { type: 'cert', label: 'CEH — Enumeration' },
      { type: 'education', label: 'Bootcamp — Computer Networking Fundamentals' },
      { type: 'education', label: 'B.S. Computer Science — Computer Networks' },
    ]
  },
  {
    name: 'DHCP / SLAAC / IPAM',
    category: 'Networking',
    sources: [
      { type: 'cert', label: 'CompTIA Network+ — Network Operations' },
      { type: 'cert', label: 'CompTIA A+ — Networking' },
      { type: 'education', label: 'Bootcamp — Computer Networking Fundamentals' },
    ]
  },
  {
    name: 'VLANs / Spanning Tree / Switching',
    category: 'Networking',
    sources: [
      { type: 'work', label: 'Booz Allen — VLANs, trunking, and inter-VLAN routing' },
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'cert', label: 'CompTIA Network+ — Network Implementation' },
      { type: 'cert', label: 'CompTIA Network+ — Network Troubleshooting' },
      { type: 'education', label: 'Bootcamp — Securing your Network' },
    ]
  },
  {
    name: 'Subnetting / CIDR / VLSM',
    category: 'Networking',
    sources: [
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'cert', label: 'CompTIA Network+ — Networking Concepts' },
      { type: 'education', label: 'B.S. Computer Science — Computer Networks' },
      { type: 'education', label: 'Bootcamp — Computer Networking Fundamentals' },
    ]
  },
  {
    name: 'NAT / PAT',
    category: 'Networking',
    sources: [
      { type: 'cert', label: 'CompTIA Network+ — Network Implementation' },
      { type: 'cert', label: 'CompTIA Security+ — Security Architecture' },
      { type: 'education', label: 'Bootcamp — Computer Networking Fundamentals' },
    ]
  },
  {
    name: 'VPN / OpenVPN / IPSec',
    category: 'Networking',
    sources: [
      { type: 'project', label: 'Secure VPN Implementation' },
      { type: 'cert', label: 'CompTIA Network+ — Network Operations' },
      { type: 'cert', label: 'CompTIA Security+ — Security Architecture' },
      { type: 'cert', label: 'SecurityX — Security Architecture' },
      { type: 'education', label: 'Bootcamp — Securing your Network' },
    ]
  },
  {
    name: 'Firewalls / IDS / IPS',
    category: 'Networking',
    sources: [
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'cert', label: 'CompTIA SecurityX — Security Architecture' },
      { type: 'cert', label: 'CompTIA CySA+ — Security Operations' },
      { type: 'cert', label: 'CompTIA Security+ — Security Operations' },
      { type: 'cert', label: 'CEH — Evading IDS, Firewalls, and Honeypots' },
      { type: 'education', label: 'Bootcamp — Integrating your Infrastructure Security' },
      { type: 'education', label: 'M.S. Cybersecurity — Network & Infrastructure Security' },
    ]
  },
  {
    name: 'Wireless Networks (802.11 / Wi-Fi)',
    category: 'Networking',
    sources: [
      { type: 'cert', label: 'CompTIA Network+ — Network Implementation' },
      { type: 'cert', label: 'CompTIA A+ — Mobile Devices' },
      { type: 'cert', label: 'CEH — Hacking Wireless Networks' },
      { type: 'education', label: 'Bootcamp — Securing your Network' },
    ]
  },
  {
    name: 'VMware / Virtualization',
    category: 'Networking',
    sources: [
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'work', label: 'Cole Engineering — Test Lead' },
      { type: 'work', label: 'MIT BWSI — Teaching Assistant' },
      { type: 'cert', label: 'CompTIA A+ — Virtualization and Cloud' },
      { type: 'cert', label: 'CompTIA Security+ — Security Architecture' },
    ]
  },
  {
    name: 'Virtualization Platforms (Proxmox/Hyper-V)',
    category: 'Networking',
    sources: [
      { type: 'work', label: 'Booz Allen — virtualization platforms (Proxmox/Hyper-V)' },
    ]
  },
  {
    name: 'Cloud Computing (IaaS / SaaS / PaaS)',
    category: 'Networking',
    sources: [
      { type: 'cert', label: 'CompTIA A+ — Virtualization and Cloud' },
      { type: 'cert', label: 'CompTIA Network+ — Networking Concepts' },
      { type: 'cert', label: 'CompTIA Security+ — Security Architecture' },
      { type: 'cert', label: 'SecurityX — Security Architecture' },
      { type: 'cert', label: 'CEH — Cloud Computing Security' },
      { type: 'education', label: 'M.S. Cybersecurity — Cloud Security Implementation' },
    ]
  },
  {
    name: 'Azure / AWS Cloud Platforms',
    category: 'Networking',
    sources: [
      { type: 'education', label: 'M.S. Cybersecurity — Cloud Security (Azure/AWS Portals, Key Vault)' },
      { type: 'cert', label: 'SecurityX — Security Architecture' },
      { type: 'cert', label: 'CEH — Cloud Computing Security' },
    ]
  },
  {
    name: 'SNMP / Syslog / Network Monitoring',
    category: 'Networking',
    sources: [
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'cert', label: 'CompTIA Network+ — Network Operations' },
      { type: 'cert', label: 'CompTIA CySA+ — Security Operations' },
    ]
  },
  {
    name: 'Cabling & Connectors',
    category: 'Networking',
    sources: [
      { type: 'work', label: 'Cole Engineering — fiber-optic cabling installation' },
      { type: 'cert', label: 'CompTIA A+ — Hardware' },
      { type: 'cert', label: 'CompTIA Network+ — Networking Concepts' },
      { type: 'cert', label: 'CompTIA Network+ — Network Troubleshooting' },
    ]
  },
  {
    name: 'Load Balancers / Proxies / NAC',
    category: 'Networking',
    sources: [
      { type: 'cert', label: 'CompTIA Network+ — Networking Concepts' },
      { type: 'cert', label: 'CompTIA Security+ — Security Operations' },
      { type: 'cert', label: 'SecurityX — Security Architecture' },
    ]
  },
  {
    name: 'Zero Trust Architecture',
    category: 'Networking',
    sources: [
      { type: 'cert', label: 'CompTIA Security+ — General Security Concepts' },
      { type: 'cert', label: 'SecurityX — Security Architecture' },
      { type: 'education', label: 'M.S. Cybersecurity — Network & Infrastructure Security' },
    ]
  },
  {
    name: 'Network Segmentation',
    category: 'Networking',
    sources: [
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'cert', label: 'SecurityX — Security Architecture' },
      { type: 'cert', label: 'CompTIA Security+ — Threats & Mitigations' },
      { type: 'education', label: 'M.S. Cybersecurity — Network & Infrastructure Security' },
      { type: 'education', label: 'Bootcamp — Designing your Cybersecurity Infrastructure' },
    ]
  },
  {
    name: 'Network Troubleshooting Methodology',
    category: 'Networking',
    sources: [
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'work', label: 'Cole Engineering — Test Lead' },
      { type: 'cert', label: 'CompTIA Network+ — Network Troubleshooting' },
      { type: 'cert', label: 'CompTIA A+ — Networking' },
      { type: 'education', label: 'M.S. Cybersecurity — Network & Infrastructure Security' },
    ]
  },
  {
    name: 'Microsoft Visio / Network Diagramming',
    category: 'Networking',
    sources: [
      { type: 'education', label: 'M.S. Cybersecurity — Network & Infrastructure Security' },
      { type: 'cert', label: 'CompTIA Network+ — Network Operations' },
    ]
  },

  // ═══════════════════════════════════════
  //  OFFENSIVE SECURITY
  // ═══════════════════════════════════════
  {
    name: 'Penetration Testing Methodology',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CompTIA PenTest+ — Engagement Management' },
      { type: 'cert', label: 'CEH — Ethical Hacking Fundamentals' },
      { type: 'education', label: 'M.S. Cybersecurity — Offensive Security & Testing' },
      { type: 'education', label: 'Bootcamp — Social Engineering and Ethical Hacking' },
      { type: 'education', label: 'Cybersecurity Bootcamp — CU Boulder' },
    ]
  },
  {
    name: 'Nmap (Advanced Scanning & NSE)',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Scanning Networks' },
      { type: 'cert', label: 'CompTIA PenTest+ — Reconnaissance' },
      { type: 'work', label: 'MIT BWSI — Teaching Assistant' },
      { type: 'education', label: 'M.S. Cybersecurity — Network & Infrastructure Security' },
      { type: 'education', label: 'Cybersecurity Bootcamp — CU Boulder' },
    ]
  },
  {
    name: 'Metasploit Framework',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Metasploit Framework' },
      { type: 'cert', label: 'CompTIA PenTest+ — Attacks and Exploits' },
      { type: 'education', label: 'M.S. Cybersecurity — Offensive Security & Testing' },
      { type: 'education', label: 'Cybersecurity Bootcamp — CU Boulder' },
    ]
  },
  {
    name: 'Burp Suite',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Burp Suite Proxy' },
      { type: 'cert', label: 'CompTIA PenTest+ — Vulnerability Discovery' },
      { type: 'education', label: 'M.S. Cybersecurity — Offensive Security & Testing' },
    ]
  },
  {
    name: 'SQL Injection (SQLmap)',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — SQL Injection' },
      { type: 'cert', label: 'CompTIA PenTest+ — Attacks and Exploits' },
      { type: 'cert', label: 'CompTIA CySA+ — Vulnerability Management' },
      { type: 'education', label: 'M.S. Cybersecurity — Offensive Security & Testing' },
    ]
  },
  {
    name: 'Cross-Site Scripting (XSS)',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Hacking Web Applications' },
      { type: 'cert', label: 'CompTIA PenTest+ — Attacks and Exploits' },
      { type: 'cert', label: 'CompTIA CySA+ — Vulnerability Management' },
      { type: 'education', label: 'M.S. Cybersecurity — Offensive Security & Testing' },
    ]
  },
  {
    name: 'ARP Spoofing / MitM / On-Path Attacks',
    category: 'Offensive Security',
    sources: [
      { type: 'project', label: 'ARP Spoofing Attack on Oculus Quest 2' },
      { type: 'cert', label: 'CEH — Packet Sniffing' },
      { type: 'cert', label: 'CompTIA PenTest+ — Attacks and Exploits' },
      { type: 'cert', label: 'CompTIA Network+ — Network Security' },
    ]
  },
  {
    name: 'BadUSB / HID Attacks (Flipper Zero)',
    category: 'Offensive Security',
    sources: [
      { type: 'project', label: 'Wireless Rubber Ducky with Flipper Zero' },
      { type: 'cert', label: 'CEH — Social Engineering' },
    ]
  },
  {
    name: 'Kali Linux',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — all modules' },
      { type: 'cert', label: 'CompTIA PenTest+ — all domains' },
      { type: 'education', label: 'Cybersecurity Bootcamp — CU Boulder' },
    ]
  },
  {
    name: 'Device Rooting / Jailbreaking',
    category: 'Offensive Security',
    sources: [
      { type: 'project', label: 'Device Rooting & Custom ROM Installation' },
      { type: 'work', label: 'CSU — Research Assistant' },
      { type: 'cert', label: 'CEH — Hacking Mobile Platforms' },
    ]
  },
  {
    name: 'OSINT / Reconnaissance',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Footprinting & Reconnaissance' },
      { type: 'cert', label: 'CompTIA PenTest+ — Reconnaissance' },
    ]
  },
  {
    name: 'Wireshark / Tcpdump / Packet Analysis',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Packet Sniffing' },
      { type: 'cert', label: 'CompTIA PenTest+ — Reconnaissance' },
      { type: 'cert', label: 'CompTIA CySA+ — Security Operations' },
      { type: 'cert', label: 'CompTIA Network+ — Network Troubleshooting' },
      { type: 'education', label: 'M.S. Cybersecurity — Defensive Operations & Incident Response' },
    ]
  },
  {
    name: 'DoS / DDoS Attacks',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — DoS/DDoS Attacks' },
      { type: 'cert', label: 'CompTIA PenTest+ — Attacks and Exploits' },
      { type: 'cert', label: 'CompTIA Network+ — Network Security' },
    ]
  },
  {
    name: 'Password Attacks (Hashcat / John / Hydra)',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Hydra / Medusa / John the Ripper / Hashcat' },
      { type: 'cert', label: 'CompTIA PenTest+ — Attacks and Exploits' },
      { type: 'cert', label: 'CEH — System Hacking' },
      { type: 'education', label: 'M.S. Cybersecurity — Offensive Security & Testing' },
    ]
  },
  {
    name: 'Active Directory Attacks',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Responder (LLMNR/NBT-NS Poisoning)' },
      { type: 'cert', label: 'CompTIA PenTest+ — Attacks and Exploits' },
    ]
  },
  {
    name: 'Privilege Escalation (Windows & Linux)',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — System Hacking' },
      { type: 'cert', label: 'CompTIA PenTest+ — Attacks and Exploits' },
      { type: 'education', label: 'M.S. Cybersecurity — Offensive Security & Testing' },
    ]
  },
  {
    name: 'Pivoting & Tunneling',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CompTIA PenTest+ — Post-Exploitation' },
    ]
  },
  {
    name: 'Session Hijacking',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Session Hijacking' },
      { type: 'cert', label: 'CompTIA PenTest+ — Attacks and Exploits' },
    ]
  },
  {
    name: 'Social Engineering / Phishing',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Social Engineering (SET)' },
      { type: 'cert', label: 'CompTIA PenTest+ — Attacks and Exploits' },
      { type: 'cert', label: 'CompTIA Security+ — Security Program Oversight' },
      { type: 'cert', label: 'CompTIA Network+ — Network Security' },
      { type: 'education', label: 'M.S. Cybersecurity — Offensive Security & Testing (SET)' },
      { type: 'education', label: 'Bootcamp — Social Engineering and Ethical Hacking' },
    ]
  },
  {
    name: 'Web Server Exploitation (IIS / Apache)',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Hacking Web Servers' },
      { type: 'cert', label: 'CompTIA PenTest+ — Attacks and Exploits' },
    ]
  },
  {
    name: 'File Inclusion (LFI / RFI)',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Hacking Web Applications' },
      { type: 'cert', label: 'CompTIA PenTest+ — Attacks and Exploits' },
    ]
  },
  {
    name: 'Directory Brute Forcing (Gobuster / Ffuf)',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Gobuster / DirBuster' },
      { type: 'cert', label: 'CompTIA PenTest+ — Vulnerability Discovery' },
    ]
  },
  {
    name: 'SMB / NFS / Service Enumeration',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Enumeration (SNMP, LDAP, NetBIOS)' },
      { type: 'cert', label: 'CompTIA PenTest+ — Reconnaissance' },
    ]
  },
  {
    name: 'Cloud Exploitation',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CompTIA PenTest+ — Attacks and Exploits' },
      { type: 'cert', label: 'SecurityX — Security Architecture' },
      { type: 'cert', label: 'CEH — Cloud Computing Security' },
      { type: 'education', label: 'M.S. Cybersecurity — Cloud Security Implementation' },
    ]
  },
  {
    name: 'IoT / OT / ICS Hacking',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — IoT and OT Hacking' },
      { type: 'cert', label: 'CompTIA Security+ — Security Architecture' },
      { type: 'cert', label: 'CompTIA Network+ — Network Security' },
    ]
  },
  {
    name: 'Steganography (OpenStego / Snow)',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Steganography' },
    ]
  },
  {
    name: 'Vulnerability Scanning (Nessus / OpenVAS)',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Vulnerability Analysis' },
      { type: 'cert', label: 'CompTIA PenTest+ — Vulnerability Discovery' },
      { type: 'cert', label: 'CompTIA CySA+ — Vulnerability Management' },
      { type: 'education', label: 'M.S. Cybersecurity — Defensive Operations (Nessus)' },
    ]
  },
  {
    name: 'BloodHound / Impacket / Mimikatz',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Responder / System Hacking' },
    ]
  },
  {
    name: 'Netcat / Ncat / Reverse & Bind Shells',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Netcat / Ncat (Backdoors)' },
      { type: 'cert', label: 'CompTIA PenTest+ — Post-Exploitation' },
      { type: 'education', label: 'Cybersecurity Bootcamp — CU Boulder' },
      { type: 'education', label: 'M.S. Cybersecurity — Offensive Security & Testing' },
    ]
  },
  {
    name: 'Hping3',
    category: 'Offensive Security',
    sources: [
      { type: 'cert', label: 'CEH — Scanning Networks' },
      { type: 'education', label: 'M.S. Cybersecurity — Network & Infrastructure Security' },
    ]
  },

  // ═══════════════════════════════════════
  //  DEFENSE & BLUE TEAM
  // ═══════════════════════════════════════
  {
    name: 'SIEM / Log Analysis',
    category: 'Defense',
    sources: [
      { type: 'work', label: 'Booz Allen — network security monitoring and SIEM tooling (Suricata/Zeek/Elastic stack)' },
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'cert', label: 'CompTIA CySA+ — Security Operations' },
      { type: 'cert', label: 'CompTIA SecurityX — Security Operations' },
      { type: 'cert', label: 'CEH — Log Analysis & Clearing Tracks' },
      { type: 'education', label: 'M.S. Cybersecurity — Defensive Operations & Incident Response' },
      { type: 'education', label: 'Bootcamp — Threat Hunting and Intelligence' },
    ]
  },
  {
    name: 'Vulnerability Remediation & Patching',
    category: 'Defense',
    sources: [
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'work', label: 'MIT BWSI — Teaching Assistant' },
      { type: 'cert', label: 'CompTIA CySA+ — Vulnerability Management' },
      { type: 'cert', label: 'CompTIA SecurityX — Security Engineering' },
      { type: 'education', label: 'M.S. Cybersecurity — Defensive Operations' },
    ]
  },
  {
    name: 'System Hardening',
    category: 'Defense',
    sources: [
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'cert', label: 'CompTIA SecurityX — Security Engineering' },
      { type: 'cert', label: 'CompTIA Security+ — Security Operations' },
      { type: 'education', label: 'M.S. Cybersecurity — Network & Infrastructure Security' },
      { type: 'education', label: 'Bootcamp — Integrating your Infrastructure Security' },
    ]
  },
  {
    name: 'Incident Response & Digital Forensics',
    category: 'Defense',
    sources: [
      { type: 'cert', label: 'CompTIA CySA+ — Incident Response' },
      { type: 'cert', label: 'CompTIA SecurityX — Security Operations' },
      { type: 'cert', label: 'CompTIA Security+ — Security Operations' },
      { type: 'education', label: 'M.S. Cybersecurity — Defensive Operations & Incident Response' },
      { type: 'education', label: 'Bootcamp — Digital Forensics and Incident Response' },
    ]
  },
  {
    name: 'Malware Analysis & Prevention',
    category: 'Defense',
    sources: [
      { type: 'cert', label: 'CEH — Malware Threats (Trojans, Viruses, Worms)' },
      { type: 'cert', label: 'CompTIA Security+ — Security Operations' },
      { type: 'cert', label: 'CompTIA CySA+ — Security Operations' },
      { type: 'cert', label: 'SecurityX — Security Operations' },
    ]
  },
  {
    name: 'Threat Hunting & Intelligence',
    category: 'Defense',
    sources: [
      { type: 'cert', label: 'CompTIA CySA+ — Security Operations' },
      { type: 'cert', label: 'SecurityX — Security Operations' },
      { type: 'cert', label: 'CompTIA Security+ — Security Operations' },
      { type: 'education', label: 'Bootcamp — Threat Hunting and Intelligence' },
    ]
  },
  {
    name: 'EDR / XDR / DLP',
    category: 'Defense',
    sources: [
      { type: 'cert', label: 'CompTIA Security+ — Security Operations' },
      { type: 'cert', label: 'CompTIA CySA+ — Security Operations' },
      { type: 'cert', label: 'SecurityX — Security Operations' },
    ]
  },
  {
    name: 'MITRE ATT&CK / Kill Chain / Diamond Model',
    category: 'Defense',
    sources: [
      { type: 'cert', label: 'CompTIA CySA+ — Incident Response' },
      { type: 'cert', label: 'SecurityX — Governance, Risk, and Compliance' },
      { type: 'cert', label: 'CompTIA Security+ — Threats & Mitigations' },
    ]
  },
  {
    name: 'Disaster Recovery & Business Continuity',
    category: 'Defense',
    sources: [
      { type: 'cert', label: 'CompTIA Network+ — Network Operations' },
      { type: 'cert', label: 'CompTIA Security+ — Security Architecture' },
      { type: 'cert', label: 'CompTIA CySA+ — Incident Response' },
      { type: 'education', label: 'M.S. Cybersecurity — Governance, Risk & Architecture (BCP)' },
    ]
  },
  {
    name: 'Network Traffic Analysis',
    category: 'Defense',
    sources: [
      { type: 'cert', label: 'CEH — Network Traffic Analysis' },
      { type: 'cert', label: 'CompTIA CySA+ — Security Operations' },
      { type: 'cert', label: 'CompTIA Network+ — Network Troubleshooting' },
      { type: 'education', label: 'M.S. Cybersecurity — Defensive Operations' },
    ]
  },
  {
    name: 'CVSS / Vulnerability Scoring',
    category: 'Defense',
    sources: [
      { type: 'cert', label: 'CompTIA CySA+ — Vulnerability Management' },
      { type: 'cert', label: 'SecurityX — Security Engineering' },
    ]
  },
  {
    name: 'SCAP / OVAL / YARA / Sigma',
    category: 'Defense',
    sources: [
      { type: 'cert', label: 'SecurityX — Security Engineering' },
      { type: 'cert', label: 'SecurityX — Security Operations' },
    ]
  },

  // ═══════════════════════════════════════
  //  CRYPTOGRAPHY
  // ═══════════════════════════════════════
  {
    name: 'Encryption (AES / RSA / PKI)',
    category: 'Cryptography',
    sources: [
      { type: 'project', label: 'Encrypted Telephone Messaging' },
      { type: 'cert', label: 'CompTIA Security+ — General Security Concepts' },
      { type: 'cert', label: 'CEH — Cryptography' },
      { type: 'cert', label: 'SecurityX — Security Engineering' },
      { type: 'work', label: 'MIT BWSI — Teaching Assistant' },
      { type: 'education', label: 'B.S. Computer Science — Systems & Network Security' },
      { type: 'education', label: 'M.S. Cybersecurity — Cloud Security (Azure Key Vault)' },
    ]
  },
  {
    name: 'Hashing (SHA / MD5 / bcrypt)',
    category: 'Cryptography',
    sources: [
      { type: 'cert', label: 'CEH — Cryptography' },
      { type: 'cert', label: 'CompTIA Security+ — General Security Concepts' },
      { type: 'cert', label: 'SecurityX — Security Engineering' },
      { type: 'education', label: 'B.S. Computer Science — Systems & Network Security' },
    ]
  },
  {
    name: 'Digital Signatures & Certificates',
    category: 'Cryptography',
    sources: [
      { type: 'cert', label: 'CompTIA Security+ — General Security Concepts' },
      { type: 'cert', label: 'SecurityX — Security Engineering' },
    ]
  },
  {
    name: 'Post-Quantum Cryptography',
    category: 'Cryptography',
    sources: [
      { type: 'cert', label: 'SecurityX — Security Engineering' },
    ]
  },

  // ═══════════════════════════════════════
  //  PROGRAMMING & SCRIPTING
  // ═══════════════════════════════════════
  {
    name: 'Python',
    category: 'Programming',
    sources: [
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'cert', label: 'CompTIA PenTest+ — Reconnaissance' },
      { type: 'cert', label: 'CompTIA CySA+ — Security Operations' },
      { type: 'cert', label: 'SecurityX — Security Engineering' },
      { type: 'education', label: 'B.S. Computer Science — Human-Computer Interaction / Scripting' },
    ]
  },
  {
    name: 'Bash / Shell Scripting',
    category: 'Programming',
    sources: [
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'work', label: 'MIT BWSI — Teaching Assistant' },
      { type: 'cert', label: 'CompTIA PenTest+ — Reconnaissance' },
      { type: 'cert', label: 'SecurityX — Security Engineering' },
      { type: 'education', label: 'B.S. Computer Science — Operating Systems' },
    ]
  },
  {
    name: 'PowerShell',
    category: 'Programming',
    sources: [
      { type: 'cert', label: 'CompTIA PenTest+ — Reconnaissance' },
      { type: 'cert', label: 'CompTIA CySA+ — Security Operations' },
      { type: 'cert', label: 'SecurityX — Security Engineering' },
      { type: 'cert', label: 'CompTIA A+ — Operating Systems' },
      { type: 'education', label: 'Bootcamp — Microsoft Security System Administration' },
    ]
  },
  {
    name: 'C / C++',
    category: 'Programming',
    sources: [
      { type: 'education', label: 'B.S. Computer Science — Software Development with C++' },
    ]
  },
  {
    name: 'Java',
    category: 'Programming',
    sources: [
      { type: 'education', label: 'B.S. Computer Science — CS1 & CS2' },
    ]
  },
  {
    name: 'C# / .NET / Unity',
    category: 'Programming',
    sources: [
      { type: 'work', label: 'CSU — Research Assistant (VR Applications)' },
      { type: 'education', label: 'B.S. Computer Science' },
    ]
  },
  {
    name: 'JavaScript / React',
    category: 'Programming',
    sources: [
      { type: 'project', label: 'This Portfolio Website' },
      { type: 'education', label: 'B.S. Computer Science — Modern Web Applications' },
    ]
  },
  {
    name: 'HTML / CSS',
    category: 'Programming',
    sources: [
      { type: 'project', label: 'This Portfolio Website' },
      { type: 'education', label: 'B.S. Computer Science — Modern Web Applications' },
    ]
  },
  {
    name: 'Assembly Language',
    category: 'Programming',
    sources: [
      { type: 'education', label: 'B.S. Computer Science — Computer Organization' },
    ]
  },
  {
    name: 'SQL / MySQL / Database Management',
    category: 'Programming',
    sources: [
      { type: 'education', label: 'B.S. Computer Science — Database Systems' },
      { type: 'cert', label: 'CEH — SQL Injection' },
    ]
  },
  {
    name: 'Git / Version Control',
    category: 'Programming',
    sources: [
      { type: 'work', label: 'Cole Engineering — Test Lead' },
      { type: 'education', label: 'B.S. Computer Science' },
    ]
  },
  {
    name: 'Data Structures & Algorithms',
    category: 'Programming',
    sources: [
      { type: 'education', label: 'B.S. Computer Science — CS2 / Algorithms' },
    ]
  },
  {
    name: 'Object-Oriented Design',
    category: 'Programming',
    sources: [
      { type: 'education', label: 'B.S. Computer Science — OOP Lab / Software Engineering' },
    ]
  },
  {
    name: 'SOAR / Automation & Orchestration',
    category: 'Programming',
    sources: [
      { type: 'cert', label: 'CompTIA Security+ — Security Operations' },
      { type: 'cert', label: 'SecurityX — Security Engineering' },
    ]
  },
  {
    name: 'Infrastructure as Code (Terraform / Ansible)',
    category: 'Programming',
    sources: [
      { type: 'work', label: 'Booz Allen — Terraform for infrastructure as code' },
      { type: 'work', label: 'Booz Allen — configuration management (Ansible/Puppet)' },
      { type: 'cert', label: 'SecurityX — Security Architecture' },
      { type: 'cert', label: 'SecurityX — Security Engineering' },
    ]
  },
  {
    name: 'Socket Programming',
    category: 'Programming',
    sources: [
      { type: 'education', label: 'B.S. Computer Science — Computer Networks' },
    ]
  },

  // ═══════════════════════════════════════
  //  SYSTEMS & ADMINISTRATION
  // ═══════════════════════════════════════
  {
    name: 'Linux Administration',
    category: 'Systems',
    sources: [
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'work', label: 'MIT BWSI — Teaching Assistant' },
      { type: 'cert', label: 'CompTIA A+ — Operating Systems' },
      { type: 'education', label: 'B.S. Computer Science — Operating Systems (Linux/Unix)' },
    ]
  },
  {
    name: 'Windows Administration',
    category: 'Systems',
    sources: [
      { type: 'work', label: 'Booz Allen — Windows Server administration including Active Directory and DNS' },
      { type: 'work', label: 'CSU — Research Assistant' },
      { type: 'cert', label: 'CompTIA A+ — Operating Systems' },
      { type: 'cert', label: 'CompTIA Security+ — Security Operations' },
      { type: 'education', label: 'Bootcamp — Microsoft Security System Administration' },
    ]
  },
  {
    name: 'Active Directory / LDAP / Group Policy',
    category: 'Systems',
    sources: [
      { type: 'cert', label: 'CompTIA Security+ — Security Operations' },
      { type: 'cert', label: 'CompTIA Network+ — Network Security' },
      { type: 'education', label: 'Bootcamp — Microsoft Security System Administration' },
    ]
  },
  {
    name: 'SSH / Remote Administration',
    category: 'Systems',
    sources: [
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'work', label: 'MIT BWSI — Teaching Assistant' },
      { type: 'cert', label: 'CompTIA Network+ — Network Operations' },
    ]
  },
  {
    name: 'OS Reimaging / Deployment',
    category: 'Systems',
    sources: [
      { type: 'work', label: 'CSU — Research Assistant' },
      { type: 'cert', label: 'CompTIA A+ — Operating Systems' },
    ]
  },
  {
    name: 'Hardware Troubleshooting',
    category: 'Systems',
    sources: [
      { type: 'work', label: 'CSU — Research Assistant' },
      { type: 'cert', label: 'CompTIA A+ — Hardware' },
      { type: 'cert', label: 'CompTIA A+ — Mobile Devices' },
    ]
  },
  {
    name: 'Containerization (Docker / Kubernetes)',
    category: 'Systems',
    sources: [
      { type: 'work', label: 'Booz Allen — deployed and troubleshot Docker containers' },
      { type: 'cert', label: 'SecurityX — Security Architecture' },
      { type: 'cert', label: 'SecurityX — Security Engineering' },
      { type: 'cert', label: 'CompTIA PenTest+ — Attacks and Exploits' },
    ]
  },
  {
    name: 'CTF / Cyber Range Exercises',
    category: 'Systems',
    sources: [
      { type: 'work', label: 'Booz Allen — Cyber Range Engineer' },
      { type: 'work', label: 'Cole Engineering — Test Lead' },
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'work', label: 'MIT BWSI — Teaching Assistant' },
    ]
  },
  {
    name: 'Mobile Device Security',
    category: 'Systems',
    sources: [
      { type: 'project', label: 'Device Rooting & Custom ROM Installation' },
      { type: 'cert', label: 'CompTIA A+ — Mobile Devices' },
      { type: 'cert', label: 'CompTIA Security+ — Security Operations' },
      { type: 'cert', label: 'CEH — Hacking Mobile Platforms' },
    ]
  },
  {
    name: 'Backup & Recovery / Data Protection',
    category: 'Systems',
    sources: [
      { type: 'cert', label: 'CompTIA A+ — Operational Procedures' },
      { type: 'cert', label: 'CompTIA Security+ — Security Architecture' },
      { type: 'cert', label: 'CompTIA Network+ — Network Operations' },
      { type: 'education', label: 'M.S. Cybersecurity — Cloud Security (Backup Policies)' },
    ]
  },
  {
    name: 'Printers & Peripherals',
    category: 'Systems',
    sources: [
      { type: 'cert', label: 'CompTIA A+ — Hardware' },
    ]
  },
  {
    name: 'Process & Thread Management',
    category: 'Systems',
    sources: [
      { type: 'education', label: 'B.S. Computer Science — Operating Systems' },
      { type: 'cert', label: 'CompTIA A+ — Operating Systems' },
    ]
  },

  // ═══════════════════════════════════════
  //  GOVERNANCE & COMPLIANCE
  // ═══════════════════════════════════════
  {
    name: 'Risk Management & Assessment',
    category: 'Governance',
    sources: [
      { type: 'cert', label: 'SecurityX — Governance, Risk, and Compliance' },
      { type: 'cert', label: 'CompTIA Security+ — Security Program Oversight' },
      { type: 'cert', label: 'CompTIA CySA+ — Reporting & Communication' },
      { type: 'education', label: 'M.S. Cybersecurity — Governance, Risk & Architecture' },
    ]
  },
  {
    name: 'Security Frameworks (NIST / ISO 27001)',
    category: 'Governance',
    sources: [
      { type: 'cert', label: 'SecurityX — Governance, Risk, and Compliance' },
      { type: 'cert', label: 'CompTIA Security+ — Security Program Oversight' },
      { type: 'education', label: 'M.S. Cybersecurity — Governance, Risk & Architecture (NIST RMF, ISO 27001)' },
    ]
  },
  {
    name: 'Compliance (PCI DSS / GDPR)',
    category: 'Governance',
    sources: [
      { type: 'cert', label: 'SecurityX — Governance, Risk, and Compliance' },
      { type: 'cert', label: 'CompTIA Security+ — Security Program Oversight' },
      { type: 'cert', label: 'CompTIA Network+ — Network Security' },
      { type: 'education', label: 'M.S. Cybersecurity — Governance, Risk & Architecture' },
    ]
  },
  {
    name: 'DoD 8570 / 8140 Compliance',
    category: 'Governance',
    sources: [
      { type: 'work', label: 'Cole Engineering — Systems Engineer' },
      { type: 'cert', label: 'CompTIA SecurityX (IAT III / IASAE II)' },
      { type: 'cert', label: 'CompTIA CySA+ (CSSP Analyst/Infra/Responder/Auditor)' },
      { type: 'cert', label: 'CEH Master (CSSP)' },
      { type: 'cert', label: 'CompTIA Security+ (IAT I & II / IAM I)' },
    ]
  },
  {
    name: 'Threat Modeling (STRIDE / ATT&CK / CAPEC)',
    category: 'Governance',
    sources: [
      { type: 'cert', label: 'SecurityX — Governance, Risk, and Compliance' },
      { type: 'cert', label: 'CompTIA CySA+ — Incident Response' },
      { type: 'education', label: 'M.S. Cybersecurity — Software Security & Engineering' },
    ]
  },
  {
    name: 'IAM / MFA / SSO / Zero Trust',
    category: 'Governance',
    sources: [
      { type: 'cert', label: 'CompTIA Security+ — Security Operations' },
      { type: 'cert', label: 'CompTIA Network+ — Network Security' },
      { type: 'cert', label: 'SecurityX — Security Architecture' },
      { type: 'cert', label: 'CompTIA Security+ — General Security Concepts' },
      { type: 'education', label: 'M.S. Cybersecurity — Cloud Security (RBAC)' },
    ]
  },
  {
    name: 'Security Awareness Training',
    category: 'Governance',
    sources: [
      { type: 'work', label: 'MIT BWSI — Teaching Assistant' },
      { type: 'cert', label: 'CompTIA Security+ — Security Program Oversight' },
      { type: 'cert', label: 'SecurityX — Governance, Risk, and Compliance' },
    ]
  },
  {
    name: 'Pentest Reporting & Documentation',
    category: 'Governance',
    sources: [
      { type: 'cert', label: 'CompTIA PenTest+ — Engagement Management' },
      { type: 'cert', label: 'CompTIA CySA+ — Reporting & Communication' },
      { type: 'education', label: 'M.S. Cybersecurity — Leadership & Integration (Capstone)' },
    ]
  },
  {
    name: 'Change Management & SOPs',
    category: 'Governance',
    sources: [
      { type: 'work', label: 'Cole Engineering — Test Lead' },
      { type: 'cert', label: 'CompTIA Security+ — General Security Concepts' },
      { type: 'cert', label: 'CompTIA A+ — Operational Procedures' },
      { type: 'cert', label: 'CompTIA Network+ — Network Operations' },
    ]
  },
  {
    name: 'SDLC / DevSecOps',
    category: 'Governance',
    sources: [
      { type: 'education', label: 'M.S. Cybersecurity — Software Security & Engineering' },
      { type: 'cert', label: 'CompTIA Security+ — Security Architecture' },
      { type: 'cert', label: 'SecurityX — Security Architecture' },
    ]
  },
  {
    name: 'SAST / DAST Testing',
    category: 'Governance',
    sources: [
      { type: 'education', label: 'M.S. Cybersecurity — Software Security & Engineering' },
      { type: 'cert', label: 'CompTIA PenTest+ — Vulnerability Discovery' },
      { type: 'cert', label: 'CompTIA CySA+ — Vulnerability Management' },
    ]
  },
  {
    name: 'Technical Writing & Communication',
    category: 'Governance',
    sources: [
      { type: 'education', label: 'B.S. Computer Science — Strategic Writing' },
      { type: 'education', label: 'M.S. Cybersecurity — Leadership & Integration (Capstone)' },
      { type: 'work', label: 'Cole Engineering — Test Lead (SOPs)' },
    ]
  },
  {
    name: 'Ethics in Computing',
    category: 'Governance',
    sources: [
      { type: 'education', label: 'B.S. Computer Science — Ethics in Computing' },
      { type: 'cert', label: 'CEH — Ethical Hacking Fundamentals' },
    ]
  },
];

const CATEGORIES = ['All', 'Networking', 'Offensive Security', 'Defense', 'Cryptography', 'Programming', 'Systems', 'Governance'];

const SOURCE_ICONS = {
  work: '💼',
  cert: '📜',
  education: '🎓',
  project: '🔬',
};

const SOURCE_LABELS = {
  work: 'Work',
  cert: 'Certification',
  education: 'Education',
  project: 'Project',
};

function SkillsMatrix() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const PREVIEW_COUNT = 9;

  const filteredSkills = SKILLS_DATA.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(search.toLowerCase()) ||
      skill.sources.some(s => s.label.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleSkill = (skillName) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName);
  };

  return (
    <div className="skills-matrix">
      <div className="skills-search-bar">
        <span className="search-prompt">root@mason-coco:~/arsenal# grep -i "</span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search skills..."
          className="search-input"
          aria-label="Search skills"
        />
        <span className="search-prompt">" skills.db</span>
      </div>

      <div className="skills-categories">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            type="button"
            className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
            aria-pressed={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="skills-count">
        {'>'} Found <span className="count-highlight">{filteredSkills.length}</span> matching skills
        {search && <> for "<span className="count-highlight">{search}</span>"</>}
      </div>

      <div className="skills-grid">
        {(showAll || search ? filteredSkills : filteredSkills.slice(0, PREVIEW_COUNT)).map(skill => (
          <div
            key={skill.name}
            className={`skill-card ${expandedSkill === skill.name ? 'expanded' : ''}`}
            role="button"
            tabIndex={0}
            aria-expanded={expandedSkill === skill.name}
            onClick={() => toggleSkill(skill.name)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleSkill(skill.name);
              }
            }}
          >
            <div className="skill-card-header">
              <span className="skill-name">{skill.name}</span>
              <div className="skill-badges">
                {[...new Set(skill.sources.map(s => s.type))].map(type => (
                  <span key={type} className={`source-badge badge-${type}`} title={SOURCE_LABELS[type]}>
                    {SOURCE_ICONS[type]}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category-tag">{skill.category}</div>
            
            {expandedSkill === skill.name && (
              <div className="skill-sources">
                <div className="sources-header">{'>'} Experience Sources:</div>
                {skill.sources.map((source, i) => (
                  <div key={i} className="source-entry">
                    <span className={`source-type-badge badge-${source.type}`}>
                      {SOURCE_ICONS[source.type]} {SOURCE_LABELS[source.type]}
                    </span>
                    <span className="source-label">{source.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {!search && filteredSkills.length > PREVIEW_COUNT && (
        <button
          type="button"
          className="show-more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? '[ SHOW LESS ]' : `[ SHOW ALL ${filteredSkills.length} SKILLS ]`}
        </button>
      )}

      {filteredSkills.length === 0 && (
        <div className="no-results">
          <p>{'>'} No matching skills found.</p>
          <p>{'>'} Try a different search query or category.</p>
        </div>
      )}
    </div>
  );
}

export default SkillsMatrix;
