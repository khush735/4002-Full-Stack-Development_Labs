# Fix Duplicate Departments Loading Logs

## Steps:
- [x] 1. Edit `src/App.tsx`: Add early return check in `loadDepartments()` to skip if `departments.length > 0`.
- [ ] 2. Reload frontend app and verify logs appear once.
- [ ] 3. Test employee add functionality.
- [ ] 4. Mark complete.

