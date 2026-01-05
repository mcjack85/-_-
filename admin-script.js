// Global variables
let applications = [];
let filteredApplications = [];
let currentEditIndex = -1;

// Load applications on page load
document.addEventListener('DOMContentLoaded', function() {
    loadApplications();
});

// Load applications from localStorage
function loadApplications() {
    applications = JSON.parse(localStorage.getItem('applications') || '[]');
    filteredApplications = [...applications];
    updateStats();
    renderApplications();
}

// Update statistics
function updateStats() {
    const total = applications.length;
    const pending = applications.filter(app => app.status === 'pending').length;
    const contacted = applications.filter(app => app.status === 'contacted').length;
    const approved = applications.filter(app => app.status === 'approved').length;

    document.getElementById('totalApplicants').textContent = total;
    document.getElementById('pendingCount').textContent = pending;
    document.getElementById('contactedCount').textContent = contacted;
    document.getElementById('approvedCount').textContent = approved;
}

// Render applications table
function renderApplications() {
    const tbody = document.getElementById('applicationsBody');
    const noData = document.getElementById('noData');
    
    if (filteredApplications.length === 0) {
        tbody.innerHTML = '';
        noData.style.display = 'block';
        return;
    }
    
    noData.style.display = 'none';
    
    tbody.innerHTML = filteredApplications.map((app, index) => {
        const originalIndex = applications.findIndex(a => 
            a.email === app.email && a.submitted_at === app.submitted_at
        );
        
        return `
            <tr>
                <td>${originalIndex + 1}</td>
                <td><strong>${app.name}</strong></td>
                <td>${app.phone}</td>
                <td>${app.email}</td>
                <td>${app.age}세</td>
                <td>${app.gender}</td>
                <td>${app.address}</td>
                <td>${app.experience || '없음'}</td>
                <td><strong>${app.income_goal}</strong></td>
                <td>${(app.marketing_channels || []).join(', ') || '-'}</td>
                <td>${formatDate(app.submitted_at)}</td>
                <td>
                    <span class="status-badge status-${app.status}">
                        ${getStatusText(app.status)}
                    </span>
                </td>
                <td>
                    <div class="table-actions">
                        <button class="btn-table btn-view" onclick="viewDetail(${originalIndex})">
                            👁️ 보기
                        </button>
                        <button class="btn-table btn-edit" onclick="openStatusModal(${originalIndex})">
                            ✏️ 상태
                        </button>
                        <button class="btn-table btn-delete" onclick="deleteApplication(${originalIndex})">
                            🗑️ 삭제
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// Get status text in Korean
function getStatusText(status) {
    const statusMap = {
        'pending': '대기 중',
        'contacted': '연락 완료',
        'approved': '합격',
        'rejected': '불합격'
    };
    return statusMap[status] || status;
}

// View application detail
function viewDetail(index) {
    const app = applications[index];
    const detailContent = document.getElementById('detailContent');
    
    detailContent.innerHTML = `
        <div class="detail-info">
            <div class="detail-label">이름</div>
            <div class="detail-value"><strong>${app.name}</strong></div>
            
            <div class="detail-label">연락처</div>
            <div class="detail-value">${app.phone}</div>
            
            <div class="detail-label">이메일</div>
            <div class="detail-value">${app.email}</div>
            
            <div class="detail-label">나이 / 성별</div>
            <div class="detail-value">${app.age}세 / ${app.gender}</div>
            
            <div class="detail-label">주소</div>
            <div class="detail-value">${app.address}</div>
        </div>
        
        <hr class="detail-divider">
        
        <div class="detail-info">
            <div class="detail-label">보험 경력</div>
            <div class="detail-value">${app.experience || '없음'}</div>
            
            <div class="detail-label">수익 목표</div>
            <div class="detail-value"><strong>${app.income_goal}</strong></div>
            
            <div class="detail-label">관심 채널</div>
            <div class="detail-value">${(app.marketing_channels || []).join(', ') || '-'}</div>
        </div>
        
        <hr class="detail-divider">
        
        <div class="detail-info">
            <div class="detail-label">지원 동기</div>
            <div class="detail-value" style="white-space: pre-wrap;">${app.motivation}</div>
        </div>
        
        <hr class="detail-divider">
        
        <div class="detail-info">
            <div class="detail-label">신청일시</div>
            <div class="detail-value">${formatDate(app.submitted_at)}</div>
            
            <div class="detail-label">현재 상태</div>
            <div class="detail-value">
                <span class="status-badge status-${app.status}">
                    ${getStatusText(app.status)}
                </span>
            </div>
        </div>
        
        ${app.note ? `
            <hr class="detail-divider">
            <div class="detail-info">
                <div class="detail-label">메모</div>
                <div class="detail-value" style="white-space: pre-wrap;">${app.note}</div>
            </div>
        ` : ''}
    `;
    
    document.getElementById('detailModal').style.display = 'block';
}

// Close detail modal
function closeDetailModal() {
    document.getElementById('detailModal').style.display = 'none';
}

// Open status update modal
function openStatusModal(index) {
    currentEditIndex = index;
    const app = applications[index];
    
    document.getElementById('newStatus').value = app.status;
    document.getElementById('statusNote').value = app.note || '';
    document.getElementById('statusModal').style.display = 'block';
}

// Close status modal
function closeStatusModal() {
    document.getElementById('statusModal').style.display = 'none';
    currentEditIndex = -1;
}

// Update application status
function updateStatus() {
    if (currentEditIndex === -1) return;
    
    const newStatus = document.getElementById('newStatus').value;
    const note = document.getElementById('statusNote').value;
    
    applications[currentEditIndex].status = newStatus;
    applications[currentEditIndex].note = note;
    applications[currentEditIndex].updated_at = new Date().toISOString();
    
    localStorage.setItem('applications', JSON.stringify(applications));
    
    closeStatusModal();
    loadApplications();
    
    showNotification('상태가 업데이트되었습니다.', 'success');
}

// Delete application
function deleteApplication(index) {
    if (!confirm('정말로 이 신청을 삭제하시겠습니까?')) {
        return;
    }
    
    applications.splice(index, 1);
    localStorage.setItem('applications', JSON.stringify(applications));
    
    loadApplications();
    showNotification('신청이 삭제되었습니다.', 'success');
}

// Confirm delete all
function confirmDeleteAll() {
    const confirmation = prompt('모든 데이터를 삭제하시겠습니까?\n삭제하려면 "삭제"를 입력하세요:');
    
    if (confirmation === '삭제') {
        localStorage.removeItem('applications');
        applications = [];
        filteredApplications = [];
        loadApplications();
        showNotification('모든 데이터가 삭제되었습니다.', 'success');
    }
}

// Search applications
function searchApplications() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (!searchTerm) {
        filteredApplications = [...applications];
    } else {
        filteredApplications = applications.filter(app => 
            app.name.toLowerCase().includes(searchTerm) ||
            app.phone.includes(searchTerm) ||
            app.email.toLowerCase().includes(searchTerm) ||
            app.address.toLowerCase().includes(searchTerm)
        );
    }
    
    renderApplications();
}

// Filter applications
function filterApplications() {
    const statusFilter = document.getElementById('statusFilter').value;
    const incomeFilter = document.getElementById('incomeFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredApplications = applications.filter(app => {
        const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
        const matchesIncome = incomeFilter === 'all' || app.income_goal === incomeFilter;
        const matchesSearch = !searchTerm || 
            app.name.toLowerCase().includes(searchTerm) ||
            app.phone.includes(searchTerm) ||
            app.email.toLowerCase().includes(searchTerm);
        
        return matchesStatus && matchesIncome && matchesSearch;
    });
    
    renderApplications();
}

// Sort applications
function sortApplications() {
    const sortBy = document.getElementById('sortBy').value;
    
    switch(sortBy) {
        case 'newest':
            filteredApplications.sort((a, b) => 
                new Date(b.submitted_at) - new Date(a.submitted_at)
            );
            break;
        case 'oldest':
            filteredApplications.sort((a, b) => 
                new Date(a.submitted_at) - new Date(b.submitted_at)
            );
            break;
        case 'name':
            filteredApplications.sort((a, b) => 
                a.name.localeCompare(b.name, 'ko')
            );
            break;
    }
    
    renderApplications();
}

// Export to CSV
function exportToCSV() {
    if (applications.length === 0) {
        showNotification('내보낼 데이터가 없습니다.', 'warning');
        return;
    }
    
    const headers = [
        '번호', '이름', '연락처', '이메일', '나이', '성별', '주소',
        '경력', '수익목표', '관심채널', '지원동기', '신청일시', '상태', '메모'
    ];
    
    const rows = applications.map((app, index) => [
        index + 1,
        app.name,
        app.phone,
        app.email,
        app.age,
        app.gender,
        app.address,
        app.experience || '없음',
        app.income_goal,
        (app.marketing_channels || []).join('; '),
        app.motivation.replace(/\n/g, ' '),
        formatDate(app.submitted_at),
        getStatusText(app.status),
        app.note || ''
    ]);
    
    let csvContent = '\uFEFF'; // UTF-8 BOM for Excel
    csvContent += headers.join(',') + '\n';
    
    rows.forEach(row => {
        const escapedRow = row.map(cell => {
            const cellStr = String(cell);
            if (cellStr.includes(',') || cellStr.includes('"') || cellStr.includes('\n')) {
                return '"' + cellStr.replace(/"/g, '""') + '"';
            }
            return cellStr;
        });
        csvContent += escapedRow.join(',') + '\n';
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    const today = new Date().toISOString().split('T')[0];
    link.setAttribute('href', url);
    link.setAttribute('download', `보험설계사_신청자_${today}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('CSV 파일이 다운로드되었습니다.', 'success');
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background-color: ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#3b82f6'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// Close modals when clicking outside
window.onclick = function(event) {
    const detailModal = document.getElementById('detailModal');
    const statusModal = document.getElementById('statusModal');
    
    if (event.target === detailModal) {
        closeDetailModal();
    }
    if (event.target === statusModal) {
        closeStatusModal();
    }
};

// Search on Enter key
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchApplications();
    }
});

// Real-time search
document.getElementById('searchInput').addEventListener('input', function() {
    searchApplications();
});

// Console message
console.log('%c🔧 관리자 페이지', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
console.log('%c신청자 데이터 관리 시스템', 'color: #10b981; font-size: 14px;');
