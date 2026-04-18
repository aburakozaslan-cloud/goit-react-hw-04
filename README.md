# 🔍 Image Search App

A modern image search application built with React and Unsplash API.

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌐 Live Demo
[View on Vercel](https://goit-react-hw-04-eta-nine-38.vercel.app/)

## 📸 Preview
<img width="1193" height="1068" alt="image" src="https://github.com/user-attachments/assets/f4de839f-90ec-4071-8a20-c5c9b70de7ec" />


## ✨ Features
- 🔎 Search photos by keyword
- 📄 Pagination with "Load More" button
- 🖼️ Responsive masonry gallery
- 💬 Modal with detailed photo info:
  - Photographer name & username
  - Number of likes
  - Upload date
  - Dominant color
  - Description
- ⚠️ Error handling
- ⏳ Loading indicator
- 🔔 Empty search validation

## 🛠️ Tech Stack
| Technology | Purpose |
|---|---|
| React 18 | UI Library |
| Vite | Build Tool |
| Axios | HTTP Requests |
| Unsplash API | Image Source |
| React Modal | Modal Window |
| React Hot Toast | Notifications |
| React Loader Spinner | Loading Indicator |
| CSS Modules | Styling |

## ⚙️ Getting Started

### Prerequisites
- Node.js 14+
- Unsplash Developer Account

### Installation

1. Clone the repository
```bash
git clone https://github.com/aburakozaslan/goit-react-hw-04
cd goit-react-hw-04
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file in root folder
VITE_UNSPLASH_KEY=your_access_key_here

4. Start development server
```bash
npm run dev
```
## 📁 Project Structure
src/
components/
SearchBar/
ImageGallery/
ImageCard/
ImageModal/
Loader/
ErrorMessage/
LoadMoreBtn/
App.jsx

## 👤 Author
**Abdullah Burak Özaslan**
- GitHub: [@aburakozaslan](https://github.com/aburakozaslan-cloud)
