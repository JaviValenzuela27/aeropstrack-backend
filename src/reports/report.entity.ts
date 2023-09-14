// CREACION DE LA BDD

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Timestamp,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('sms_reports')
export class Report {
  @PrimaryGeneratedColumn()
  idsms_reports: number;

  @Column({ type: 'varchar', length: 1000 })
  description: string;

  @Column({ type: 'timestamp', nullable: true })
  incident_datetime: Timestamp;

  @Column({ type: 'varchar', length: 100 })
  place: string;

  @Column({ type: 'boolean' })
  had_hurt_people: boolean;

  @Column({ type: 'boolean' })
  had_hurt_equipment: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  email: string;

  @CreateDateColumn({
    type: 'timestamp' /*, default: () => *CURRENT_TIMESTAMP''*/,
  })
  report_datetime: Timestamp;

  @Column({ type: 'char', length: 25, nullable: true })
  system_code: string;
}
