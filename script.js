// 多语言支持
const translations = {
    zh: {
        'nav-title': '我的作品集',
        'nav-home': '首页',
        'nav-portfolio': '作品',
        'nav-about': '关于',
        'nav-contact': '联系',
        'hero-title': '欢迎来到我的作品集',
        'hero-subtitle': '创意设计师 & 前端开发者',
        'hero-description': '我是一名充满热情的前端开发者，专注于创建美观且功能强大的用户体验。',
        'hero-btn-about': '了解更多',
        'hero-btn-contact': '联系我',
        'profile-name': '张三',
        'profile-title': '前端开发工程师',
        'about-title': '关于我',
        'about-subtitle': '了解我的技能、经历和成就',
        'intro-title': '个人简介',
        'intro-text': '我是一名经验丰富的前端开发工程师，拥有5年的Web开发经验。我热爱创造美观、响应式的用户界面，并始终关注最新的技术趋势。我的目标是帮助企业和个人实现他们的数字化愿景。',
        'skills-title': '技能专长',
        'timeline-title': '专业经历',
        'timeline-job1-title': '高级前端开发工程师',
        'timeline-job1-company': '科技公司',
        'timeline-job1-desc': '负责公司主要产品的前端开发，带领团队完成多个重要项目。',
        'timeline-job2-title': '前端开发工程师',
        'timeline-job2-company': '互联网公司',
        'timeline-job2-desc': '参与多个Web应用开发，积累了丰富的React和Vue.js开发经验。',
        'timeline-job3-title': '初级前端开发工程师',
        'timeline-job3-company': '创业公司',
        'timeline-job3-desc': '开始前端开发职业生涯，学习并掌握了HTML、CSS、JavaScript等基础技术。',
        'achievements-title': '成就与证书',
        'achievement1-title': '最佳员工奖',
        'achievement1-desc': '2023年度最佳员工',
        'achievement2-title': 'AWS认证',
        'achievement2-desc': 'AWS解决方案架构师认证',
        'achievement3-title': '项目成功',
        'achievement3-desc': '成功交付50+项目',
        'achievement4-title': '技术专家',
        'achievement4-desc': '前端技术专家认证',
        'contact-title': '联系我',
        'contact-subtitle': '让我们开始合作吧',
        'contact-form-title': '发送消息',
        'form-name': '姓名',
        'form-email': '邮箱',
        'form-subject': '主题',
        'form-message': '留言',
        'form-submit': '发送消息',
        'contact-info-title': '联系信息',
        'contact-email': '邮箱',
        'contact-phone': '电话',
        'contact-location': '位置',
        'contact-address': '北京市朝阳区',
        'social-title': '社交媒体',
        'map-title': '我的位置',
        'map-placeholder': '地图加载中...',
        'footer-text': '© 2024 个人作品集. 保留所有权利.',
        'footer-privacy': '隐私政策',
        'footer-terms': '服务条款',
        'portfolio-title': '我的作品',
        'portfolio-subtitle': '展示我的创意作品和项目',
        'upload-title': '上传作品图片',
        'upload-desc': '点击或拖拽图片到此处上传',
        'upload-tips': '支持 JPG、PNG、GIF 格式，最大 10MB',
        'upload-btn': '选择图片',
        'upload-success': '图片上传成功！',
        'upload-error': '上传失败，请重试',
        'upload-invalid-format': '不支持的图片格式',
        'upload-too-large': '图片文件过大，请选择小于10MB的图片',
        'portfolio-empty': '暂无作品',
        'portfolio-empty-desc': '上传您的第一张作品图片开始展示吧！',
        'portfolio-view': '查看',
        'portfolio-download': '下载',
        'portfolio-delete': '删除',
        'portfolio-confirm-delete': '确定要删除这张图片吗？',
        'portfolio-delete-success': '图片已删除'
    },
    en: {
        'nav-title': 'My Portfolio',
        'nav-home': 'Home',
        'nav-portfolio': 'Portfolio',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        'hero-title': 'Welcome to My Portfolio',
        'hero-subtitle': 'Creative Designer & Frontend Developer',
        'hero-description': 'I am a passionate frontend developer focused on creating beautiful and functional user experiences.',
        'hero-btn-about': 'Learn More',
        'hero-btn-contact': 'Contact Me',
        'profile-name': 'John Doe',
        'profile-title': 'Frontend Developer',
        'about-title': 'About Me',
        'about-subtitle': 'Learn about my skills, experience and achievements',
        'intro-title': 'Personal Introduction',
        'intro-text': 'I am an experienced frontend developer with 5 years of web development experience. I love creating beautiful, responsive user interfaces and always stay updated with the latest technology trends. My goal is to help businesses and individuals achieve their digital vision.',
        'skills-title': 'Skills & Expertise',
        'timeline-title': 'Professional Experience',
        'timeline-job1-title': 'Senior Frontend Developer',
        'timeline-job1-company': 'Tech Company',
        'timeline-job1-desc': 'Responsible for frontend development of company\'s main products, leading teams to complete multiple important projects.',
        'timeline-job2-title': 'Frontend Developer',
        'timeline-job2-company': 'Internet Company',
        'timeline-job2-desc': 'Participated in multiple web application developments, accumulated rich experience in React and Vue.js development.',
        'timeline-job3-title': 'Junior Frontend Developer',
        'timeline-job3-company': 'Startup Company',
        'timeline-job3-desc': 'Started frontend development career, learned and mastered basic technologies like HTML, CSS, JavaScript.',
        'achievements-title': 'Achievements & Certifications',
        'achievement1-title': 'Best Employee Award',
        'achievement1-desc': '2023 Best Employee of the Year',
        'achievement2-title': 'AWS Certification',
        'achievement2-desc': 'AWS Solutions Architect Certification',
        'achievement3-title': 'Project Success',
        'achievement3-desc': 'Successfully delivered 50+ projects',
        'achievement4-title': 'Technical Expert',
        'achievement4-desc': 'Frontend Technology Expert Certification',
        'contact-title': 'Contact Me',
        'contact-subtitle': 'Let\'s start working together',
        'contact-form-title': 'Send Message',
        'form-name': 'Name',
        'form-email': 'Email',
        'form-subject': 'Subject',
        'form-message': 'Message',
        'form-submit': 'Send Message',
        'contact-info-title': 'Contact Information',
        'contact-email': 'Email',
        'contact-phone': 'Phone',
        'contact-location': 'Location',
        'contact-address': 'Chaoyang District, Beijing',
        'social-title': 'Social Media',
        'map-title': 'My Location',
        'map-placeholder': 'Map loading...',
        'footer-text': '© 2024 Personal Portfolio. All rights reserved.',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service',
        'portfolio-title': 'My Portfolio',
        'portfolio-subtitle': 'Showcase my creative works and projects',
        'upload-title': 'Upload Portfolio Images',
        'upload-desc': 'Click or drag images here to upload',
        'upload-tips': 'Supports JPG, PNG, GIF formats, max 10MB',
        'upload-btn': 'Select Images',
        'upload-success': 'Image uploaded successfully!',
        'upload-error': 'Upload failed, please try again',
        'upload-invalid-format': 'Unsupported image format',
        'upload-too-large': 'Image file too large, please select images smaller than 10MB',
        'portfolio-empty': 'No Works Yet',
        'portfolio-empty-desc': 'Upload your first portfolio image to get started!',
        'portfolio-view': 'View',
        'portfolio-download': 'Download',
        'portfolio-delete': 'Delete',
        'portfolio-confirm-delete': 'Are you sure you want to delete this image?',
        'portfolio-delete-success': 'Image deleted successfully'
    }
};

// DOM元素
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('themeToggle');
const langButtons = document.querySelectorAll('.lang-btn');
const contactForm = document.getElementById('contactForm');

// 图片上传相关元素
const uploadArea = document.getElementById('uploadArea');
const imageUpload = document.getElementById('imageUpload');
const portfolioGrid = document.getElementById('portfolioGrid');

// 存储上传的图片数据
let portfolioImages = JSON.parse(localStorage.getItem('portfolioImages')) || [];

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // 初始化主题
    initializeTheme();
    
    // 初始化语言
    initializeLanguage();
    
    // 初始化导航
    initializeNavigation();
    
    // 初始化滚动动画
    initializeScrollAnimations();
    
    // 初始化技能条动画
    initializeSkillBars();
    
    // 初始化联系表单
    initializeContactForm();
    
    // 初始化平滑滚动
    initializeSmoothScroll();
    
    // 初始化地图
    initializeMap();
    
    // 初始化图片上传功能
    initializeImageUpload();
    
    // 渲染已保存的图片
    renderPortfolioImages();
}

// 主题切换功能
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // 添加切换动画
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    });
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// 多语言功能
function initializeLanguage() {
    const savedLang = localStorage.getItem('language') || 'zh';
    setLanguage(savedLang);
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            localStorage.setItem('language', lang);
        });
    });
}

function setLanguage(lang) {
    // 更新语言按钮状态
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // 更新页面内容
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // 更新HTML lang属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

// 导航功能
function initializeNavigation() {
    // 移动端菜单切换
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // 点击导航链接时关闭移动端菜单
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // 滚动时导航栏样式变化
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                navbar.style.background = 'rgba(17, 24, 39, 0.98)';
            }
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                navbar.style.background = 'rgba(17, 24, 39, 0.95)';
            }
        }
    });
}

// 滚动动画
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // 为需要动画的元素添加观察
    const animatedElements = document.querySelectorAll('.skill-item, .timeline-item, .achievement-item, .contact-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// 技能条动画
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                progressBar.style.setProperty('--target-width', width);
                progressBar.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// 联系表单功能
function initializeContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // 显示加载状态
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '发送中...';
        submitBtn.disabled = true;
        
        // 模拟发送（实际项目中应该发送到服务器）
        setTimeout(() => {
            // 显示成功消息
            showNotification('消息发送成功！', 'success');
            
            // 重置表单
            contactForm.reset();
            
            // 恢复按钮状态
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// 通知功能
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // 样式
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 平滑滚动
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // 考虑导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 地图功能
function initializeMap() {
    const mapContainer = document.querySelector('.map-container');
    const mapPlaceholder = document.querySelector('.map-placeholder');
    
    // 模拟地图加载
    setTimeout(() => {
        mapPlaceholder.innerHTML = `
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;">
                <i class="fas fa-map-marked-alt" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <h3 style="margin-bottom: 1rem;">北京市朝阳区</h3>
                <p style="opacity: 0.8;">点击查看详细位置</p>
            </div>
        `;
        
        // 添加点击事件
        mapContainer.addEventListener('click', function() {
            // 在实际项目中，这里可以打开真实的地图应用
            showNotification('正在打开地图应用...', 'info');
        });
    }, 1500);
}

// 页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // 为英雄区域添加加载动画
    const heroElements = document.querySelectorAll('.hero-text > *, .hero-image');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// 键盘导航支持
document.addEventListener('keydown', function(e) {
    // ESC键关闭移动端菜单
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
    
    // Ctrl/Cmd + K 切换主题
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        themeToggle.click();
    }
});

// 性能优化：防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 优化滚动性能
const optimizedScrollHandler = debounce(function() {
    // 滚动相关的处理逻辑
}, 16); // 约60fps

window.addEventListener('scroll', optimizedScrollHandler);

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
    // 可以在这里添加错误报告逻辑
});

// 页面可见性API - 当页面重新可见时刷新某些内容
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        // 页面重新可见时的处理
        console.log('页面重新可见');
    }
});

// 图片上传功能
function initializeImageUpload() {
    // 点击上传区域
    uploadArea.addEventListener('click', function(e) {
        if (e.target === uploadArea || e.target.closest('.upload-content')) {
            imageUpload.click();
        }
    });
    
    // 文件选择
    imageUpload.addEventListener('change', function(e) {
        handleFileUpload(e.target.files);
    });
    
    // 拖拽上传
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        handleFileUpload(e.dataTransfer.files);
    });
}

// 处理文件上传
function handleFileUpload(files) {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    
    Array.from(files).forEach(file => {
        // 验证文件类型
        if (!allowedTypes.includes(file.type)) {
            showNotification(getCurrentTranslation('upload-invalid-format'), 'error');
            return;
        }
        
        // 验证文件大小
        if (file.size > maxSize) {
            showNotification(getCurrentTranslation('upload-too-large'), 'error');
            return;
        }
        
        // 创建文件读取器
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageData = {
                id: Date.now() + Math.random(),
                name: file.name,
                size: file.size,
                type: file.type,
                data: e.target.result,
                uploadDate: new Date().toISOString()
            };
            
            portfolioImages.push(imageData);
            savePortfolioImages();
            renderPortfolioImages();
            showNotification(getCurrentTranslation('upload-success'), 'success');
        };
        
        reader.readAsDataURL(file);
    });
}

// 渲染作品图片
function renderPortfolioImages() {
    if (portfolioImages.length === 0) {
        portfolioGrid.innerHTML = `
            <div class="empty-portfolio">
                <i class="fas fa-images"></i>
                <h3 data-lang="portfolio-empty">暂无作品</h3>
                <p data-lang="portfolio-empty-desc">上传您的第一张作品图片开始展示吧！</p>
            </div>
        `;
        return;
    }
    
    portfolioGrid.innerHTML = portfolioImages.map(image => `
        <div class="portfolio-item" data-id="${image.id}">
            <img src="${image.data}" alt="${image.name}" class="portfolio-image">
            <div class="portfolio-overlay">
                <div class="portfolio-actions">
                    <button class="portfolio-btn" onclick="viewImage('${image.id}')" title="${getCurrentTranslation('portfolio-view')}">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="portfolio-btn" onclick="downloadImage('${image.id}')" title="${getCurrentTranslation('portfolio-download')}">
                        <i class="fas fa-download"></i>
                    </button>
                    <button class="portfolio-btn" onclick="deleteImage('${image.id}')" title="${getCurrentTranslation('portfolio-delete')}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="portfolio-info">
                <div class="portfolio-title">${image.name}</div>
                <div class="portfolio-meta">
                    <div class="portfolio-size">
                        <i class="fas fa-weight-hanging"></i>
                        <span>${formatFileSize(image.size)}</span>
                    </div>
                    <div class="portfolio-date">
                        <i class="fas fa-calendar"></i>
                        <span>${formatDate(image.uploadDate)}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// 查看图片
function viewImage(imageId) {
    const image = portfolioImages.find(img => img.id == imageId);
    if (!image) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <img src="${image.data}" alt="${image.name}" class="modal-image">
            <div class="modal-info">
                <div class="modal-title">${image.name}</div>
                <div class="modal-meta">
                    ${formatFileSize(image.size)} • ${formatDate(image.uploadDate)}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    // 点击背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// 关闭模态框
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// 下载图片
function downloadImage(imageId) {
    const image = portfolioImages.find(img => img.id == imageId);
    if (!image) return;
    
    const link = document.createElement('a');
    link.href = image.data;
    link.download = image.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 删除图片
function deleteImage(imageId) {
    if (confirm(getCurrentTranslation('portfolio-confirm-delete'))) {
        portfolioImages = portfolioImages.filter(img => img.id != imageId);
        savePortfolioImages();
        renderPortfolioImages();
        showNotification(getCurrentTranslation('portfolio-delete-success'), 'success');
    }
}

// 保存图片数据到本地存储
function savePortfolioImages() {
    localStorage.setItem('portfolioImages', JSON.stringify(portfolioImages));
}

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// 格式化日期
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
}

// 获取当前语言的翻译
function getCurrentTranslation(key) {
    const currentLang = localStorage.getItem('language') || 'zh';
    return translations[currentLang] && translations[currentLang][key] ? translations[currentLang][key] : key;
}

// 更新通知样式
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // 样式
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 导出功能（如果需要）
window.PortfolioApp = {
    setLanguage,
    showNotification,
    translations,
    viewImage,
    downloadImage,
    deleteImage,
    closeModal
};
