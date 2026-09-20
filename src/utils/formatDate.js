/**
 * نمایش تاریخ برای UI: شمسی + فقط تاریخ و ساعت (بدون ثانیه/منطقه زمانی).
 * ورودی می‌تواند ISO کامل یا رشته‌ی ساده باشد.
 */
export function formatDate(value, { withTime = true } = {}) {
  if (value == null || value === '') return '';
  const raw = String(value).trim();
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) {
    if (raw.includes('T')) return raw.split('T')[0];
    return raw;
  }

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  if (withTime) {
    options.hour = '2-digit';
    options.minute = '2-digit';
    options.hour12 = false;
  }

  try {
    return new Intl.DateTimeFormat('fa-IR-u-ca-persian', options).format(parsed);
  } catch {
    return new Intl.DateTimeFormat('fa-IR', options).format(parsed);
  }
}
