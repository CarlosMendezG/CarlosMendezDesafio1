export function fechaATexto(value: string, ignoreTime: boolean = true): Date {
    // if (!ignoreTime && value.indexOf('Z') != -1) return new Date(value);
    const t = value.split('T');
    const ymd = t[0].split('-');
    const time = t[1].split(':');
    return ignoreTime ? new Date(+ymd[0], +ymd[1] - 1, +ymd[2]) : new Date(+ymd[0], +ymd[1] - 1, +ymd[2], +time[0], +time[1], +time[2]);
}